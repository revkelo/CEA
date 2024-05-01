///**
// * Paquete controller
// */
//package controller;
//
//import java.io.File;
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.util.ArrayList;
//
//import model.AspiranteDAO;
//import model.AspiranteDTO;
//import model.persistance.FileHandler;
//import view.Console;
//import model.AspiranteDTO;
//
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServlet;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
///**
// * Servlet implementation class ServletTabla
// * 
// * Esta clase se encarga de manejar las solicitudes HTTP y generar una tabla
// * HTML que muestra los datos de los aspirantes
// * 
// * @author Kevin
// * @author Daniela
// * @author Nicolas
// */
//public class ServletTabla extends HttpServlet {
//
//	/**
//	 * Atributo FileHandler nombrado f
//	 */
//	private FileHandler f;
//	/**
//	 * Atributo AspiranteDAO nombrado dao
//	 */
//	private AspiranteDAO dao;
//	/**
//	 * Atributo Console nombrado con
//	 */
//	private Console con;
//
//	/**
//	 * Constructor por defecto de la clase
//	 * 
//	 * Se crean las instancias de las clases necesarias
//	 */
//	public ServletTabla() {
//		f = new FileHandler();
//		dao = new AspiranteDAO();
//		con = new Console();
//	}
//
//	/**
//	 * Método service para manejar las solicitudes HTTP
//	 * 
//	 * Se verifica si la solicitud es de tipo DELETE, PUT, GET o POST, y se ejecuta
//	 * el método correspondiente
//	 */
//	protected void service(HttpServletRequest request, HttpServletResponse response)
//			throws ServletException, IOException {
//		if ("DELETE".equals(request.getParameter("_method"))) {
//			// Manejar la solicitud DELETE
//			doDelete(request, response);
//		} else if ("PUT".equals(request.getParameter("_method"))) {
//			// Manejar la solicitud PUT
//			doPut(request, response);
//		} else if ("GET".equals(request.getParameter("_method"))) {
//			// Manejar la solicitud GET
//			doGet(request, response);
//
//		} else {
//			// Manejar la solicitud POST
//			doPost(request, response);
//		}
//	}
//
//	/**
//	 * 
//	 * Método que maneja la petición GET y muestra la información de los aspirantes
//	 * en una tabla HTML.
//	 * 
//	 * @param req  objeto HttpServletRequest que contiene la información de la
//	 *             solicitud del cliente.
//	 * 
//	 * @param resp objeto HttpServletResponse que contiene la información de la
//	 *             respuesta del servidor.
//	 * 
//	 * @throws ServletException si ocurre un error en el servlet.
//	 * 
//	 * @throws IOException      si ocurre un error de entrada/salida al manejar la
//	 *                          petición.
//	 */
//	@Override
//	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		resp.setContentType("text/html");
//		con.mostrar("----------------------------------------------------------------------------");
//		ArrayList<AspiranteDTO> lista = (ArrayList<AspiranteDTO>) req.getSession().getAttribute("lista");
//
//		PrintWriter salida = resp.getWriter();
//
//		String uploadPath = getServletContext().getRealPath("") + File.separator + "uploads";
//		File uploadDir = new File(uploadPath);
//
//		String url = uploadDir.getAbsolutePath();
//
//		salida.println("<!DOCTYPE html>\r\n" + "<html>\r\n" + "\r\n" + "<head>\r\n" + "<meta charset=\"UTF-8\" />\r\n"
//				+ "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n"
//				+ "<title>Formularios con Bootstrap</title>\r\n" + "<!-- Agrega los estilos de Bootstrap -->\r\n"
//				+ "<link rel=\"stylesheet\"\r\n"
//				+ "	href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\r\n"
//				+ "	integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"\r\n"
//				+ "	crossorigin=\"anonymous\" />\r\n" + "</head>\r\n" + "\r\n" + "<body>\r\n"
//				+ "	<h1 class=\"display-4\">Administrativo</h1>\r\n" + "	<div class=\"p-2 g-col-6\"></div>\r\n"
//				+ "	<div class=\"p-2 g-col-6\"></div>\r\n" + "	<div class=\"p-2 g-col-6\"></div>\r\n"
//				+ "	<div class=\"p-2 g-col-6\"></div>\r\n" + "\r\n" + "\r\n"
//				+ "	<table class=\"table table-bordered border-primary\">\r\n" + "		<thead>\r\n"
//				+ "			<tr>\r\n" + "				<th>ID</th>\r\n" + "				<th>Imagen</th>\r\n"
//				+ "				<th>Nombre</th>\r\n" + "				<th>Fecha</th>\r\n"
//				+ "				<th>Edad</th>\r\n" + "				<th>Colegio</th>\r\n"
//				+ "				<th>Carrera</th>\r\n" + "				<th>Estrato</th>\r\n"
//				+ "				<th>Homologado</th>\r\n" + "				<th>Costo</th>\r\n" + "			</tr>\r\n"
//				+ "		</thead>\r\n" + "		<tbody>\r\n");
//
//		for (int i = 0; i < lista.size(); i++) {
//			salida.println("    <tr>\r\n" + "      <td>" + i + "</td>\r\n");
//
//			salida.println("  <td><img src=" + "'" + url + i + ".jpg" + "'" + "></td>");
//			salida.println("      <td>" + lista.get(i).getNombre() + "</td>\r\n"
//
//					+ "      <td>" + lista.get(i).getFecha() + "</td>\r\n" + "      <td>" + lista.get(i).getEdad()
//					+ "</td>\r\n"
//
//					+ "      <td>" + lista.get(i).getColegio() + "</td>\r\n" + "      <td>" + lista.get(i).getCarrera()
//					+ "</td>\r\n" + "      <td>" + lista.get(i).getEstrato() + "</td>\r\n" + "      <td>"
//					+ lista.get(i).getHomologado() + "</td>\r\n" + "      <td>" + lista.get(i).getCosto() + "</td>\r\n"
//
//					+ "    </tr>\r\n"
//
//			);
//		}
//		salida.println("    </tbody>\r\n" + "  </table>\r\n" + "\r\n" + "\r\n" + "</body>\r\n" + "\r\n" + "</html>");
//
//		salida.close();
//	}
//
//	/**
//	 * 
//	 * Procesa las solicitudes HTTP POST para la gestión de los datos de los
//	 * aspirantes.
//	 * 
//	 * @param req  La solicitud HTTP recibida.
//	 * @param resp La respuesta HTTP que se enviará.
//	 * @throws ServletException si se produce un error en la gestión de la
//	 *                          solicitud.
//	 * @throws IOException      si se produce un error de E/S al enviar la
//	 *                          respuesta.
//	 */
//	@Override
//	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//
//	}
//
//	/**
//	 * 
//	 * Este método se ejecuta cuando se recibe una petición PUT desde un cliente.
//	 * 
//	 * Permite actualizar información en el servidor.
//	 * 
//	 * @param req  Objeto HttpServletRequest que contiene información sobre la
//	 *             solicitud del cliente.
//	 * 
//	 * @param resp Objeto HttpServletResponse que se utiliza para enviar la
//	 *             respuesta al cliente.
//	 * 
//	 * @throws ServletException si ocurre un error durante la ejecución del servlet.
//	 * 
//	 * @throws IOException      si ocurre un error de entrada/salida durante la
//	 *                          ejecución del servlet.
//	 */
//
//	@Override
//	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		resp.setContentType("text/html");
//		PrintWriter salida = resp.getWriter();
//
//		ArrayList<AspiranteDTO> lista = (ArrayList<AspiranteDTO>) req.getSession().getAttribute("lista");
//
//		String name = req.getParameter("inputIdActualizar");
//		String nuevo = req.getParameter("opcactualizar");
//
//		dao.actualizar(name, nuevo, lista);
//
//		salida.println("<html><body onload=\"showLoginError()\">  <h1>Actualizado</h1> </body></html>");
//		resp.setHeader("Refresh", "1; URL=admin.jsp");
//		salida.close();
//	}
//
//	/**
//	 * 
//	 * Este método se ejecuta cuando se recibe una petición DELETE desde un cliente.
//	 * 
//	 * Permite eliminar información en el servidor.
//	 * 
//	 * @param req  Objeto HttpServletRequest que contiene información sobre la
//	 *             solicitud del cliente.
//	 * 
//	 * @param resp Objeto HttpServletResponse que se utiliza para enviar la
//	 *             respuesta al cliente.
//	 * 
//	 * @throws ServletException si ocurre un error durante la ejecución del servlet.
//	 * 
//	 * @throws IOException      si ocurre un error de entrada/salida durante la
//	 *                          ejecución del servlet.
//	 */
//	@Override
//	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		resp.setContentType("text/html");
//		PrintWriter salida = resp.getWriter();
//		ArrayList<AspiranteDTO> lista = (ArrayList<AspiranteDTO>) req.getSession().getAttribute("lista");
//
//		String name = req.getParameter("inputNobreEliminar");
//
//		dao.delete(dao.buscar(name, lista), lista);
//
//		con.mostrar(lista.size() + "NAME: " + name);
//		salida.println("<html><body onload=\"showLoginError()\">  <h1>Eliminado</h1> </body></html>");
//		resp.setHeader("Refresh", "1; URL=admin.jsp");
//		salida.close();
//	}
//
//}
