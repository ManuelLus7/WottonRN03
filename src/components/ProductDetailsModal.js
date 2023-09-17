import React from 'react';
import { Modal, View, Text, Image, Button, ScrollView } from 'react-native';
import { globalStyles } from '../global/index';

const ProductDetailsModal = ({ product, onClose }) => {

  // Extraigo las propiedades del producto si existe, o establezco valores por defecto

  const { image, name, description, presentation, size, stock } = product || {};

  return (
    <Modal visible={!!product} animationType="slide">

      {product ? ( // Si hay un producto seleccionado, muestro los detalles del producto

        <View style={globalStyles.modalContainer}>
          <Image source={{ uri: image }} style={globalStyles.modalImage} />
          <Text style={globalStyles.modalName}>{name}</Text>
          <ScrollView style={globalStyles.modalDescriptionContainer}>
            <Text style={globalStyles.modalText}>

              {/* Muestro la información del producto */}

              <Text style={globalStyles.modalTextTitle}>Descripción:</Text> {description}
            </Text>
            <Text style={globalStyles.modalText}>
            <Text style={globalStyles.modalTextTitle}>Presentación:</Text> {presentation}
            </Text>
            <Text style={globalStyles.modalText}>
            <Text style={globalStyles.modalTextTitle}>Tamaño:</Text> {size}
            </Text>
            <Text style={globalStyles.modalText}>
            <Text style={globalStyles.modalTextTitle}>Stock disponible:</Text> {stock}
            </Text>
          </ScrollView>
          <Button title="Cerrar" onPress={onClose} />
        </View>
      ) : (
        <View style={globalStyles.modalContainer}>

          {/* Si no se ha seleccionado ningún producto, muestro un mensaje */}

          <Text style={globalStyles.modalText}>No se ha seleccionado ningún producto.</Text>
          <Button title="Cerrar" onPress={onClose} />
        </View>
      )}
    </Modal>
  );
};

export default ProductDetailsModal;
