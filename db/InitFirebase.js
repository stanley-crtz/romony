import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

export class InitFirebase {

    constructor() {

        const firebaseConfig = {
            apiKey: "AIzaSyALB8JaICmGvs0yiIIbEdI85W5t-snYU4M",
            authDomain: "romony-ecommerce.firebaseapp.com",
            projectId: "romony-ecommerce",
            storageBucket: "romony-ecommerce.appspot.com",
            messagingSenderId: "151279341510",
            appId: "1:151279341510:web:4cfb70393efee61ac5acc7"
        };

        this.app = initializeApp(firebaseConfig);
        this.database = getFirestore(this.app)
        
    }

}