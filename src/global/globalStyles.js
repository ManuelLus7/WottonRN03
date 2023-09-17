import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 7, // Agrego un espaciado horizontal
    paddingTop: 5, // Agrego un espaciado superior
  },
  statusBar: {
    backgroundColor: '#000',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    width: '48%', // Establezco un Ancho del producto para mostrar dos columnas
    marginRight: '2%', // Dosy espaciado entre productos
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  detailsButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  detailsButtonText: {
    fontFamily: 'Lobster-Regular',
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartButtonText: {
    fontFamily: 'Lobster-Regular',
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  modalName: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  modalText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    marginTop: 10,
    color: '#555',
  },
  searchInputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    fontFamily: 'PoppinsRegular',
  },
  filterOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  filterOption: {
    width: '48%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF',
  },
  filterOptionText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  productCardContainer: {
    width: '48%',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  productName: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  productDetailsButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
  },
  productDetailsButtonText: {
    fontFamily: 'Lobster-Regular',
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
