import react, { useState } from "react";
import axios from "axios";

const file = () => {
    const [file, setFile] = useState(null);

const uploadFile = (event:any) => {
    setFile(event.target.files[0])
}
const manageUpload = () => {
    const data = new FormData();
}


}