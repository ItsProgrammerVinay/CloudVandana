import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        // Convert the input sentence to lowercase for case insensitivity
        sentence = sentence.toLowerCase();

        // Create an array to keep track of the occurrence of each letter
        boolean[] alphabet = new boolean[26];

        // Iterate through the sentence and mark the corresponding alphabet letters
        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                int index = ch - 'a';
                alphabet[index] = true;
            }
        }

        // Check if all alphabet letters have been marked
        for (boolean letter : alphabet) {
            if (!letter) {
                return false;
            }
        }

        return true;
    }
}
