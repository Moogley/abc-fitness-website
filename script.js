// ========== CART FUNCTIONALITY WITH sessionStorage ==========

function addToCart(itemName) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(itemName);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to the cart");
  }
  
  function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cart.length > 0) {
      alert("Cart Contents:\n" + cart.join("\n"));
    } else {
      alert("Your cart is empty.");
    }
  }
  
  function clearCart() {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cart.length > 0) {
      sessionStorage.removeItem('cart');
      alert("Cart cleared");
    } else {
      alert("No items to clear");
    }
  }
  
  function processOrder() {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cart.length > 0) {
      sessionStorage.removeItem('cart');
      alert("Thank you for your order");
    } else {
      alert("Cart is empty");
    }
  }
  
  // ========== SUBSCRIBE FEATURE ==========
  function subscribe() {
    const email = document.getElementById("subscribe-email").value.trim();
    if (email) {
      alert("Thank you for subscribing");
      document.getElementById("subscribe-email").value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  }
  
  // ========== ABOUT US FORM (localStorage) ==========
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
  
        const entry = {
          name,
          email,
          message,
          timestamp: new Date().toLocaleString()
        };
  
        let feedback = JSON.parse(localStorage.getItem("feedback")) || [];
        feedback.push(entry);
        localStorage.setItem("feedback", JSON.stringify(feedback));
  
        alert("Thank you for your message");
        contactForm.reset();
      });
    }
  });
  