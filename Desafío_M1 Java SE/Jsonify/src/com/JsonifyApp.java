package com;

public class JsonifyApp {

	public static void main(String[] args) {
		if (args.length > 0) {
            String[] data = args;
            String json = jsonify(data);
            System.out.println(json);
        } else {
            System.out.println("No se proporcionaron parámetros de entrada.");
        }
    }

    public static String jsonify(String[] data) {
        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("{\"data\":[");
        for (int i = 0; i < data.length; i++) {
            jsonBuilder.append("\"").append(data[i]).append("\"");
            if (i < data.length - 1) {
                jsonBuilder.append(",");
            }
        }
        jsonBuilder.append("]}");
        return jsonBuilder.toString();

	}

}
