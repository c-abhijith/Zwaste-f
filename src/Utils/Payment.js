import axios from "../axios";
import { axiosAuthorize } from "../axios";

function loadScript(src) {
  
  return new Promise((resolve) => {

    const script = document.createElement("script");
    
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}



export const makePayment = async (price,id, callBack) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }
  var response;

  try {
    response = await axios.post("payment/payment",{price: price},
    
     );
    console.log(response);
    console.log("purchase")
  } catch (error) {
      console.log(error);
  }

  const options = {
    key: "rzp_test_xFSWIL714S4Ayy",
    currency: response.data.currency,
    amount: response.data.amount.toString(),
    order_id: response.data.id,
    name: "Z-wastE",
    description: "Make the payment to complete the process",
    image: "",
    handler: async (response) => {
      console.log(response)
      try {
        const {data} = await axiosAuthorize.post("/payment/payment/success",{product_id : id})
        console.log("=============================================");
        console.log(data);
        callBack()
        
      } catch (error) {
        console.log(error);
        console.log("*******************************************************");

      }

    },
    prefill: {
      name: "Z-wastE",
      email: "zero_waste@gmail.com",
      phone_number: "7306641726",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
