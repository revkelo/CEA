package controller;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.swing.JOptionPane;

public class OracleBD {
    private Connection conexion;

    public OracleBD() {
        try {
            Conectar();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    public void Conectar() throws ClassNotFoundException, SQLException {
        Class.forName("oracle.jdbc.OracleDriver");
        String BaseDeDatos = "jdbc:oracle:thin:@26.6.131.178:1521:XE";
        conexion = DriverManager.getConnection(BaseDeDatos, "SYSTEM", "123");
        if (conexion != null) {
        	System.out.println( "ORACLE Conexion exitosa a registro");
        } else {
            JOptionPane.showMessageDialog(null, "Conexion fallida");
        }
    }

    public void imprimirPersonas() {
        try {

            Statement statement = conexion.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM PERSONA");

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String nombre = resultSet.getString("nombre");


                System.out.println("ID: " + id + ", Nombre: " + nombre );
            }

            resultSet.close();
            statement.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

	public Connection getConexion() {
		return conexion;
	}

	public void setConexion(Connection conexion) {
		this.conexion = conexion;
	}

}
