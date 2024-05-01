package controller;

public class Main {
	public static void main(String[] args) {
		OracleBD oracle = new OracleBD();
		SQL sql = new SQL();
		sql.MySQLConnect();
	}
}
