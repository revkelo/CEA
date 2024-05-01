package controller;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

public class Main {
	public static void main(String[] args) {
		OracleBD oracle = new OracleBD();
		SQL sql = new SQL();
		sql.MySQLConnect();
		
		System.out.println("ORACLE");
		oracle.imprimirPersonas();
		System.out.println("MYSQL");
		sql.imprimirPersonas();

	}
}
