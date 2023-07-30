package com;

public class CalculadoraApp {

	public static void main(String[] args) {
		if (args.length != 3) {
            System.out.println("Ingresa dos digitos separados por un espacio y luego la opecacion que desees (Ejemplo: 2 2 SUM)");
            return;
        }

        int a = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);
        String operacion = args[2];

        switch (operacion) {
            case "SUM":
                int suma = sumar(a, b);
                System.out.println("- " + suma);
                break;
            case "RES":
                int resta = restar(a, b);
                System.out.println("- " + resta);
                break;
            case "MUL":
                int multiplicacion = multiplicar(a, b);
                System.out.println("- " + multiplicacion);
                break;
            case "DIV":
                if (b != 0) {
                    int division = dividir(a, b);
                    System.out.println("- " + division);
                } else {
                    System.out.println("No se puede dividir entre cero.");
                }
                break;
            default:
                System.out.println("Operación no válida. Use SUM, RES, MUL o DIV.");
        }
    }

    public static int sumar(int a, int b) {
        return a + b;
    }

    public static int restar(int a, int b) {
        return a - b;
    }

    public static int multiplicar(int a, int b) {
        return a * b;
    }

    public static int dividir(int a, int b) {
        return a / b;

	}

}
