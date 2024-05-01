///**
// * Paquete model
// */
//package model;
//
//import java.io.IOException;
//import java.util.ArrayList;
//
//import model.persistance.FileHandler;
//
///**
// * Clase que se encarga de los metodos del crud
// * 
// * @author Kevin
// * @author Daniela
// * @author Nicolas
// *
// */
//
//public class AspiranteDAO {
//
//	/**
//	 * Atributo tipo ArrayList
//	 */
//	private ArrayList<AspiranteDTO> list;
//
//	/**
//	 * Metodo constructor
//	 */
//	public AspiranteDAO() {
//		list = new ArrayList<AspiranteDTO>();
//
//	}
//
//	/**
//	 * Metodo para listar
//	 * 
//	 * @param lista ArrayList con lista de aspirantes
//	 * @return rta un String
//	 */
//	public String listar(ArrayList<AspiranteDTO> lista) {
//		String rta = "";
//
//		for (int i = 0; i < lista.size(); i++) {
//			rta = lista.toString();
//		}
//		return rta;
//	}
//
//	/**
//	 * Metodo para eliminar
//	 * 
//	 * @param index atributo tipo entero
//	 * @param list  ArrayList con lista de aspirantes
//	 * @return la eliminacion del dato en la tabla
//	 */
//	public boolean delete(int index, ArrayList<AspiranteDTO> list) {
//		boolean found = false;
//		try {
//			list.remove(index);
//			found = true;
//		} catch (IndexOutOfBoundsException e) {
//			e.printStackTrace();
//		} catch (Exception e) {
//			found = false;
//		}
//		return found;
//	}
//
//	/**
//	 * Metodo actualizar
//	 * 
//	 * @param aux1 atributo tipo String que recibe el nombre por el que se va a
//	 *             buscar
//	 * @param aux  atributo tipo String que recibe el nombre del nuevo colegio
//	 * @param list ArrayList con lista de aspirantes
//	 * @return la actualizacion del dato en la tabla
//	 */
//	public boolean actualizar(String aux1, String aux, ArrayList<AspiranteDTO> list) {
//		try {
//			int one = buscar(aux1, list);
//
//			list.get(one).setColegio(aux);
//
//			return true;
//		} catch (IndexOutOfBoundsException e) {
//			return false;
//		} catch (Exception e) {
//			return false;
//		}
//	}
//
//	/**
//	 * Metodo buscar
//	 * 
//	 * @param aux  atributo tipo String por el que va a buscar
//	 * @param list ArrayList con lista de aspirantes
//	 * @return el dato encontrado
//	 */
//
//	public int buscar(String aux, ArrayList<AspiranteDTO> list) {
//
//		for (int i = 0; i < list.size(); i++) {
//
//			if (aux.equals(list.get(i).getNombre())) {
//				return i;
//			}
//		}
//		return -1;
//	}
//
//	/**
//	 * Metodo para agregar un aspirante
//	 * 
//	 * @param nombre     atributo tipo String
//	 * @param fecha      atributo tipo String
//	 * @param edad       atributo tipo String
//	 * @param colegio    atributo tipo String
//	 * @param carrera    atributo tipo String
//	 * @param estrato    atributo tipo String
//	 * @param homologado atributo tipo String
//	 * @param costo      atributo tipo String
//	 * @param url        atributo tipo String
//	 */
//	public void agregarAspirante(String nombre, String fecha, String edad, String colegio, String carrera,
//			String estrato, String homologado, String costo, String url) {
//		list.add(new AspiranteDTO(nombre, fecha, edad, colegio, carrera, estrato, homologado, costo, url));
//
//	}
//
//	/**
//	 * El metodo get funciona para tomar o llamar el atributo
//	 * 
//	 * @return the list
//	 */
//	public ArrayList<AspiranteDTO> getList() {
//		return list;
//	}
//
//	/**
//	 * El metodo set funciona para actualizar el atributo
//	 * 
//	 * @param list the list to set
//	 */
//	public void setList(ArrayList<AspiranteDTO> list) {
//		this.list = list;
//	}
//
//}