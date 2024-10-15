import java.io.FileNotFoundException; 
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List; 
import java.util.Map;
import java.util.Scanner;
import java.util.Set; 
import java.util.Stack; 

public class MadaPublicTransportClean { 
    private final static int TOP_N_TO_PRINT = 3; 
    private final static int TWELVE_HOURS_IN_MIN = 720; 
    private static Map<String, Node> allBusStationAssocs; 
    private static Map<String, Integer> busFrequencies; 
    private static List<List<Node>> allRawPaths; 
    private static Set<String> visitedStations; 
    private static Set<String> visitedCorrespondances; 
    public static void main(String[] args) throws FileNotFoundException { 
        initCollections(); 
        Scanner inputReader = new Scanner(System.in); 
        int nbBusLine = inputReader.nextInt(); 
        inputReader.nextLine(); 
        while (nbBusLine-- > 0) { buildStationsTreesByBuses(inputReader); } 
        String[] userStartAndDest = inputReader.nextLine().split(" "); 
        inputReader.close(); 
        String startStationId = userStartAndDest[0]; 
        String destStationId = userStartAndDest[1]; 
        int usertStartWaitTime = convertToMinute(userStartAndDest[2]); 
        List<Node> allStartStations = findAllStartNodes(startStationId); 
        Stack<Node> currentRoute = new Stack<>(); 
        for (Node startStation : allStartStations) { 
            searchPathDFS(startStation, null, destStationId, currentRoute);
         } 
         if (allRawPaths.isEmpty()) { 
            System.out.println("IMPOSSIBLE"); return; 
        } 
        List<Route> allPossibleRoutes = new ArrayList<>(); 
        for (List<Node> rawPath : allRawPaths) {
             List<Node> newRawPath = clonePath(rawPath); 
             fixArrDepTimes(newRawPath, usertStartWaitTime); 
             Route cleanedRoute = cleanRouteAndCalcTotalTime(newRawPath, usertStartWaitTime); 
             allPossibleRoutes.add(cleanedRoute); 
            } 
        Collections.sort(allPossibleRoutes); 
        printTopNRoutes(allPossibleRoutes); 
    } 
    private static void initCollections() { 
        allBusStationAssocs = new HashMap<>(); 
        busFrequencies = new HashMap<>(); 
        allRawPaths = new ArrayList<>(); 
        visitedStations = new HashSet<>(); 
        visitedCorrespondances = new HashSet<>(); 
    } 
    private static List<Node> clonePath(List<Node> rawPath) { 
        List<Node> newRawPath = new ArrayList<>(); 
        for (Node currNode : rawPath) { 
            newRawPath.add(new Node(currNode)); 
        } 
        return newRawPath; 
    } 
    private static void printTopNRoutes(List<Route> allPossibleRoutes) { 
        for (int routeIndex = 0; routeIndex < Math.min(allPossibleRoutes.size(), TOP_N_TO_PRINT); routeIndex++) { 
            System.out.println(allPossibleRoutes.get(routeIndex)); 
        } 
    } 
    private static Route cleanRouteAndCalcTotalTime(List<Node> rawPath, int usertStartWaitTime) { 
        int rawPathSize = rawPath.size(); 
        Node lastNode = rawPath.get(rawPathSize - 1); 
        int totalTime = lastNode.arrDepTime - usertStartWaitTime; 
        List<Node> cleanedPath = new ArrayList<>(); 
        cleanedPath.add(rawPath.get(0)); 
        for (int nodeIndex = 1; nodeIndex < rawPathSize - 1; nodeIndex++) { 
            Node prevNode = rawPath.get(nodeIndex - 1); 
            Node currentNode = rawPath.get(nodeIndex); 
            if (currentNode.busId.equals(prevNode.busId)) { 
                continue; 
            } 
            cleanedPath.add(currentNode); 
        } 
        cleanedPath.add(lastNode); 
        return new Route(totalTime, cleanedPath); 
    } 
    private static void fixArrDepTimes(List<Node> rawPath, int usertStartWaitTime) { 
        Node startNode = rawPath.get(0); 
        fixTempTime(startNode, usertStartWaitTime); 
        for (int nodeIndex = 1; nodeIndex < rawPath.size(); nodeIndex++) { 
            Node prevNode = rawPath.get(nodeIndex - 1); 
            int prevArrDepTime = prevNode.arrDepTime; 
            Node currentNode = rawPath.get(nodeIndex); 
            fixTempTime(currentNode, prevArrDepTime); 
        } 
    } 
    private static void fixTempTime(Node currentNode, int startWaitingTime) { 
        String busId = currentNode.busId; 
        int busFreq = busFrequencies.get(busId); 
        int tempArrDepTime = currentNode.arrDepTime; 
        while (tempArrDepTime < startWaitingTime) {
             tempArrDepTime += busFreq; 
        } 
        currentNode.arrDepTime = tempArrDepTime; 
    }
    private static void searchPathDFS(Node currentStation, String prevStationId, String destStationId, Stack<Node> currentRoute) { String stationId = currentStation.stationId; String currentBusStationId = currentStation.busStationId; currentRoute.push(currentStation); visitedStations.add(stationId); if (currentStation.stationId.equals(destStationId)) { allRawPaths.add(new ArrayList<>(currentRoute)); currentRoute.pop(); visitedStations.remove(stationId); return; } for (Node nextStation : currentStation.nextStationsByBuses) { if (visitedStations.contains(nextStation.busStationId)) { continue; } searchPathDFS(nextStation, stationId, destStationId, currentRoute); } if (prevStationId != null) { for (Node correspondance : allBusStationAssocs.values()) { String corresBusStationId = correspondance.busStationId; String correStationId = correspondance.stationId; if (correStationId.equals(stationId) && currentBusStationId != corresBusStationId) { if (correStationId.equals(prevStationId) || visitedCorrespondances.contains(correStationId)) { continue; } visitedCorrespondances.add(correStationId); searchPathDFS(correspondance, stationId, destStationId, currentRoute); visitedCorrespondances.remove(correStationId); } } } visitedStations.remove(stationId); currentRoute.pop(); } private static List<Node> findAllStartNodes(String startStationId) { List<Node> allStartStations = new ArrayList<>(); for (Node currentStation : allBusStationAssocs.values()) { if (currentStation.stationId.equals(startStationId)) { allStartStations.add(currentStation); } } return allStartStations; } private static void buildStationsTreesByBuses(Scanner scan) { String[] tokens = scan.nextLine().split(" "); String busId = tokens[0]; int frequency = Integer.parseInt(tokens[1]); busFrequencies.put(busId, frequency); int nbStations = Integer.parseInt(tokens[2]); Node previousStation = null; while (nbStations-- > 0) { String[] stationDetails = scan.nextLine().split(" "); String stationId = stationDetails[0]; int arrDepTime = convertToMinute(stationDetails[1]); String busStationId = busId + "|" + stationId; if (!allBusStationAssocs.containsKey(busStationId)) { allBusStationAssocs.put(busStationId, new Node(busStationId, busId, stationId, arrDepTime)); } Node currentStation = allBusStationAssocs.get(busStationId); if (previousStation != null) { previousStation.nextStationsByBuses.add(currentStation); } previousStation = currentStation; } } private static int convertToMinute(String timeString) { String[] timeDetails = timeString.split(""); String[] timePart = timeDetails[0].split(":"); boolean isPM = timeDetails[1].equals("PM"); int minutesFromMidnight = (Integer.parseInt(timePart[0]) * 60); minutesFromMidnight += Integer.parseInt(timePart[1]); minutesFromMidnight += (isPM ? TWELVE_HOURS_IN_MIN : 0); return minutesFromMidnight; } public static String convertToTime(int minutes) { boolean isPM = false; if (minutes >= TWELVE_HOURS_IN_MIN) { isPM = true; minutes -= TWELVE_HOURS_IN_MIN; } int hours = (minutes / 60); minutes = minutes - (hours * 60); StringBuilder timeBuilder = new StringBuilder(""); if (hours == 0 && isPM) { hours = 12; } timeBuilder.append(zeroPad(hours)).append(":"); timeBuilder.append(zeroPad(minutes)).append(""); timeBuilder.append(isPM ? "PM" : "AM"); return timeBuilder.toString(); } public static String convertToHourMinute(int minutes) { int hours = minutes / 60; minutes -= (hours * 60); StringBuilder timeBuilder = new StringBuilder(""); timeBuilder.append(zeroPad(hours)).append("h"); timeBuilder.append(zeroPad(minutes)).append("m"); return timeBuilder.toString(); } private static String zeroPad(int timeValue) { return (timeValue < 10 ? "0" : "").concat(String.valueOf(timeValue)); } } class Route implements Comparable { int totalTime; List allRouteNodes; Route(int totalTime, List<Node> allRouteNodes) { this.totalTime = totalTime; this.allRouteNodes = allRouteNodes; } @Override public int compareTo(Route other) { if (totalTime == other.totalTime) { return allRouteNodes.size() - other.allRouteNodes.size(); } return totalTime - other.totalTime; } @Override public String toString() { StringBuilder builder = new StringBuilder(MadaPublicTransportClean.convertToHourMinute(totalTime)); int routeNodesSize = allRouteNodes.size(); for (int nodeIndex = 0; nodeIndex < routeNodesSize; nodeIndex++) { Node nodeToPrint = allRouteNodes.get(nodeIndex); boolean showBusId = nodeIndex < routeNodesSize - 1; String nodeString = nodeToPrint.toPrint(showBusId); builder.append(" ").append(nodeString); } return builder.toString(); } } class Node { String busStationId; String busId; String stationId; int arrDepTime; Set nextStationsByBuses; public Node(String busStationId, String busId, String stationId, int arrDepTime) { this.busStationId = busStationId; this.busId = busId; this.stationId = stationId; this.arrDepTime = arrDepTime; this.nextStationsByBuses = new HashSet<>(); } public Node(Node original) { busStationId = original.busStationId; busId = original.busId; stationId = original.stationId; arrDepTime = original.arrDepTime; } @Override public boolean equals(Object obj) { return ((Node) obj).busStationId.equals(busStationId); } @Override public int hashCode() { return busStationId.hashCode(); } public String toPrint(boolean showBusId) { 
        StringBuilder builder = new StringBuilder(showBusId ? busStationId : stationId); 
        builder.append("|"); 
        builder.append(MadaPublicTransportClean.convertToTime(arrDepTime)); 
        return builder.toString(); 
    } 
}
