import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Text, useTheme, Button } from "react-native-paper";
import Dividers from "../../components/global/Divider";
import Heading from "../../components/global/Heading";
import { getPhotos, getTips } from "../../api/GlobalApi";
import TipsBlock from "../../components/RestoDetailsScreen/TipsBlock";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/FavoritesSlice";
import RestoDetailsHeader from "../../components/RestoDetailsScreen/RestoDetailsHeader";
import RestoInfo from "../../components/RestoDetailsScreen/RestoInfo";
import RestoCategory from "../../components/RestoDetailsScreen/RestoCategory";

const { width: screenWidth } = Dimensions.get("window");

const RestoDetailsScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [tips, setTips] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const theme = useTheme();
  const params = useRoute().params;
  const navigation = useNavigation();

  const isFavorite = favorites.some((fav) => fav.id === params?.resto.fsq_id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(params?.resto.fsq_id));
    } else {
      dispatch(addFavorite(params?.resto));
    }
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      if (params) {
        const fetchedPhotos = await getPhotos(params.resto.fsq_id);
        setPhotos(fetchedPhotos);
      }
    };

    const fetchTips = async () => {
      if (params) {
        const fetchedTips = await getTips(params.resto.fsq_id);
        setTips(fetchedTips);
      }
    };

    fetchTips();
    fetchPhotos();
  }, [params]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPhoto(null);
  };

  return (
    <View>
      <ScrollView>
        <RestoDetailsHeader uriPhoto={params?.photo} />
        <View style={styles.detailsContainer}>
          <RestoInfo
            name={params?.resto.name}
            address={params?.resto.location.formatted_address}
            distance={params?.resto.distance}
            region={params?.resto.location.region}
          />
          <Dividers />

          <RestoCategory
            categoryName={params?.resto.categories[0].name}
            categoryIcon={params?.icon}
          />

          <Dividers />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onPress={toggleFavorite}
            >
              {isFavorite ? (
                <MaterialIcons
                  name="favorite"
                  size={40}
                  color={theme.colors.secondary}
                />
              ) : (
                <MaterialIcons
                  name="favorite-outline"
                  size={40}
                  color={theme.colors.secondary}
                />
              )}
              <Text style={{ fontFamily: "Poppins" }}>Save as favoris</Text>
            </TouchableOpacity>
          </View>
          <Dividers />
          <Text style={styles.info}>
            Country: {params?.resto.location.country}
          </Text>
          <Text style={styles.info}>
            Locality: {params?.resto.location.locality}
          </Text>
          <Text style={styles.info}>
            Coordinates: {params?.resto.geocodes.main.latitude},
            {params?.resto.geocodes.main.longitude}
          </Text>
          <Dividers />
          <View>
            <Heading text={"Photos"} />
            <FlatList
              data={photos}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => openModal(item)}>
                  <Image
                    source={{ uri: `${item.prefix}original${item.suffix}` }}
                    style={styles.thumbnailImage}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <Dividers />
          <Heading text={"Avis"} />
          {tips.map((item, index) => {
            return (
              <TipsBlock
                key={index}
                date={item.created_at}
                content={item.text}
              />
            );
          })}
        </View>
        {selectedPhoto && (
          <Modal
            visible={isModalVisible}
            transparent={true}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <Image
                source={{
                  uri: `${selectedPhoto.prefix}original${selectedPhoto.suffix}`,
                }}
                style={styles.fullscreenImage}
              />
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Ionicons name="close-circle" size={50} color="white" />
              </TouchableOpacity>
            </View>
          </Modal>
        )}
      </ScrollView>
    </View>
  );
};

export default RestoDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
    display: "flex",
    gap: 7,
  },
  title: {
    fontFamily: "Poppins-bold",
    fontSize: 20,
  },
  address: {
    fontFamily: "Poppins-medium",
  },
  btnContainer: {
    position: "absolute",
    top: 27,
    left: 20,
    zIndex: 10,
    padding: 4,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 50,
  },
  itemIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  info: {
    fontFamily: "Poppins",
  },
  thumbnailImage: {
    borderRadius: 20,
    width: screenWidth / 2 - 15,
    height: 150,
    margin: 5,
    resizeMode: "cover",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
