/**
 * Paquete model
 */
package model;

/**
 * Clase AspiranteDTO del proyecto
 * 
 * @author Kevin
 * @author Daniela
 * @author Nicolas
 */
public class AspiranteDTO {
	/**
	 * Atributo tipo String nombrado nombre
	 */
	private String nombre;
	/**
	 * Atributo tipo String nombrado fecha
	 */
	private String fecha;
	/**
	 * Atributo tipo String nombrado edad
	 */
	private String edad;
	/**
	 * Atributo tipo String nombrado colegio
	 */
	private String colegio;
	/**
	 * Atributo tipo String nombrado carrera
	 */
	private String carrera;
	/**
	 * Atributo tipo String nombrado estrato
	 */
	private String estrato;
	/**
	 * Atributo tipo String nombrado homologado
	 */
	private String homologado;
	/**
	 * Atributo tipo String nombrado costo
	 */
	private String costo;
	/**
	 * Atributo tipo String nombrado url
	 */
	private String url;

	/**
	 * Metodo AspitanteDTO
	 * 
	 * @param nombre     variable tipo String
	 * @param fecha      variable tipo String
	 * @param edad       variable tipo String
	 * @param colegio    variable tipo String
	 * @param carrera    variable tipo String
	 * @param estrato    variable tipo String
	 * @param homologado variable tipo String
	 * @param costo      variable tipo String
	 * @param url        variable tipo String
	 */
	public AspiranteDTO(String nombre, String fecha, String edad, String colegio, String carrera, String estrato,
			String homologado, String costo, String url) {
		super();
		this.nombre = nombre;
		this.fecha = fecha;
		this.edad = edad;
		this.colegio = colegio;
		this.carrera = carrera;
		this.estrato = estrato;
		this.homologado = homologado;
		this.costo = costo;
		this.url = url;
	}

	/**
	 * Metodo constructor
	 */
	public AspiranteDTO() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * El metodo get funciona para tomar o llamar el atributo
	 * 
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * El metodo set funciona para actualizar el atributo
	 * 
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * El metodo get funciona para tomar o llamar el atributo
	 * 
	 * @return the fecha
	 */
	public String getFecha() {
		return fecha;
	}

	/**
	 * El metodo set funciona para actualizar el atributo
	 * 
	 * @param fecha the fecha to set
	 */
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	/**
	 * El metodo get funciona para tomar o llamar el atributo
	 * 
	 * @return the colegio
	 */
	public String getColegio() {
		return colegio;
	}

	/**
	 * El metodo set funciona para actualizar el atributo
	 * 
	 * @param colegio the colegio to set
	 */
	public void setColegio(String colegio) {
		this.colegio = colegio;
	}

	/**
	 * El metodo get funciona para tomar o llamar el atributo
	 * 
	 * @return the carrera
	 */
	public String getCarrera() {
		return carrera;
	}

	/**
	 * El metodo set funciona para actualizar el atributo
	 * 
	 * @param carrera the carrera to set
	 */
	public void setCarrera(String carrera) {
		this.carrera = carrera;
	}

	/**
	 * El metodo get funciona para tomar o llamar el atributo
	 * 
	 * @return the estrato
	 */
	public String getEstrato() {
		return estrato;
	}

	/**
	 * El metodo set funciona para actualizar el atributo
	 * 
	 * @param estrato the estrato to set
	 */
	public void setEstrato(String estrato) {
		this.estrato = estrato;
	}

	/**
	 * El metodo get funciona para tomar o llamar el atributo
	 * 
	 * @return the homologado
	 */
	public String getHomologado() {
		return homologado;
	}

	/**
	 * El metodo set funciona para actualizar el atributo
	 * 
	 * @param homologado the homologado to set
	 */
	public void setHomologado(String homologado) {
		this.homologado = homologado;
	}

	/**
	 * El metodo get funciona para tomar o llamar el atributo
	 * 
	 * @return the costo
	 */
	public String getCosto() {
		return costo;
	}

	/**
	 * El metodo set funciona para actualizar el atributo
	 * 
	 * @param costo the costo to set
	 */
	public void setCosto(String costo) {
		this.costo = costo;
	}

	/**
	 * El metodo get funciona para tomar o llamar el atributo
	 * 
	 * @return the edad
	 */
	public String getEdad() {
		return edad;
	}

	/**
	 * El metodo set funciona para actualizar el atributo
	 * 
	 * @param edad the edad to set
	 */
	public void setEdad(String edad) {
		this.edad = edad;
	}

	/**
	 * El metodo get funciona para tomar o llamar el atributo
	 * 
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * El metodo set funciona para actualizar el atributo
	 * 
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * Metodo tipo String toString
	 * 
	 * @return res variable tipo String
	 */
	@Override
	public String toString() {
		String res = "";
		res += this.nombre + ";" + this.fecha + ";" + this.edad + ";" + this.colegio + ";" + this.carrera + ";"
				+ this.estrato + ";" + this.homologado + ";" + this.costo + ";" + this.url;
		return res;
	}

}
