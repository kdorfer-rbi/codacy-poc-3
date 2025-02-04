import { greet } from './util';

export class Logger {
    public static log(message: string): void {
        console.log("Log: " + message);
    }

    // Duplicate method with different name
    public static logMessage(message: string): void {
        console.log("Log: " + message);
    }

    public static greetLog(name: string): void {
        console.log(greet(name)); // Use the greet function
    }
}