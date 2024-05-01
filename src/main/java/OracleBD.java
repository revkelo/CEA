

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.swing.JOptionPane;

public class OracleBD {
	private Connection conexion;

	public OracleBD() {
		try {
			Conectar();
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void Conectar() throws ClassNotFoundException, SQLException {
		Class.forName("oracle.jdbc.OracleDriver");
		String BaseDeDatos = "jdbc:oracle:thin:@26.6.131.178:1521:XE";
		conexion = DriverManager.getConnection(BaseDeDatos, "SYSTEM", "123");
		if (conexion != null) {
			JOptionPane.showMessageDialog(null, "ORACLE Conexion exitosa a registro");
		} else {
			JOptionPane.showMessageDialog(null, "Conexion fallida");
		}

	}

	public Connection getConexion() {
		return conexion;
	}

	public void setConexion(Connection conexion) {
		this.conexion = conexion;
	}
}
