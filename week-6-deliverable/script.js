/* ============================================================
   IROO MOTORS — JavaScript / DOM Manipulation Assignment
   ------------------------------------------------------------
   The four learning outcomes demonstrated on this webpage:

   1. DOCUMENT OBJECT MODEL (DOM)
      The page is a tree of elements (nodes). We select nodes and
      then change their content, classes, and styles using
      textContent, innerHTML, classList and style — all without
      reloading the page.

   2. DOM SELECTORS
      - document.getElementById()    -> selects ONE element by id
      - document.querySelector()     -> selects the FIRST match
      - document.querySelectorAll()  -> selects ALL matching elements

   3. DOM EVENTS
      addEventListener() attaches behaviour to real page elements.
      Used here: click, input, change, submit, mouseover, mouseout.

   4. CALLBACK FUNCTIONS
      Functions passed to other functions: event listener callbacks,
      array methods (map, filter, forEach) and setTimeout.
   ============================================================ */


/* ------------------------------------------------------------
   1. VEHICLE DATA — array of objects
   ------------------------------------------------------------
   Every vehicle is one object. The webpage is built from this
   array using JavaScript. */
const vehicles = [
    {
        id: "gwagon",
        name: "Mercedes-Benz G-Wagon",
        brand: "Mercedes-Benz",
        model: "G 63 AMG",
        year: 2024,
        price: 185000,
        mileage: "1,200 km",
        transmission: "Automatic",
        fuel: "Petrol",
        type: "SUV",
        image: "assets/g-wagon.svg",
        description: "Strong luxury SUV with bold design and premium comfort."
    },
    {
        id: "range-rover",
        name: "Range Rover Autobiography",
        brand: "Range Rover",
        model: "Autobiography",
        year: 2024,
        price: 165000,
        mileage: "2,800 km",
        transmission: "Automatic",
        fuel: "Petrol",
        type: "SUV",
        image: "assets/range-rover.svg",
        description: "Elegant SUV with refined interior and advanced technology."
    },
    {
        id: "lexus-lx",
        name: "Lexus LX 600",
        brand: "Lexus",
        model: "LX 600",
        year: 2023,
        price: 120000,
        mileage: "5,400 km",
        transmission: "Automatic",
        fuel: "Petrol",
        type: "SUV",
        image: "assets/lexus-lx.svg",
        description: "Comfortable, reliable, and suitable for executive travel."
    },
    {
        id: "defender",
        name: "Land Rover Defender",
        brand: "Land Rover",
        model: "110 X-Dynamic",
        year: 2023,
        price: 135000,
        mileage: "3,100 km",
        transmission: "Automatic",
        fuel: "Diesel",
        type: "SUV",
        image: "assets/defender.svg",
        description: "Modern rugged styling with premium features for daily driving."
    },
    {
        id: "bmw-m5",
        name: "BMW M5 Competition",
        brand: "BMW",
        model: "M5 Competition",
        year: 2024,
        price: 115000,
        mileage: "950 km",
        transmission: "Automatic",
        fuel: "Petrol",
        type: "Sedan",
        image: "assets/bmw-m5.svg",
        description: "High-performance sports sedan with track-ready power."
    },
    {
        id: "s-class",
        name: "Mercedes-Benz S-Class",
        brand: "Mercedes-Benz",
        model: "S 580",
        year: 2024,
        price: 130000,
        mileage: "2,200 km",
        transmission: "Automatic",
        fuel: "Petrol",
        type: "Sedan",
        image: "assets/s-class.svg",
        description: "Flagship luxury sedan with first-class rear comfort."
    },
    {
        id: "porsche-911",
        name: "Porsche 911 Carrera",
        brand: "Porsche",
        model: "Carrera S",
        year: 2023,
        price: 145000,
        mileage: "1,700 km",
        transmission: "Manual",
        fuel: "Petrol",
        type: "Coupe",
        image: "assets/porsche-911.svg",
        description: "Timeless sports coupe built for driving pleasure."
    },
    {
        id: "bmw-i7",
        name: "BMW i7 xDrive60",
        brand: "BMW",
        model: "i7 xDrive60",
        year: 2024,
        price: 125000,
        mileage: "800 km",
        transmission: "Automatic",
        fuel: "Electric",
        type: "Sedan",
        image: "assets/bmw-i7.svg",
        description: "Fully electric flagship sedan with silent luxury."
    }
];


/* ------------------------------------------------------------
   2. DOM SELECTORS
   ------------------------------------------------------------
   The car grid is empty in the HTML on purpose. Every vehicle
   card is created below and inserted into the page with
   JavaScript (DOM manipulation). */

// document.getElementById() — select each element by its id
const carGrid = document.getElementById("carGrid");
const carSearch = document.getElementById("carSearch");
const brandFilter = document.getElementById("brandFilter");
const typeFilter = document.getElementById("typeFilter");
const budgetFilter = document.getElementById("budgetFilter");
const resultsInfo = document.getElementById("resultsInfo");
const noCars = document.getElementById("noCars");
const favCount = document.getElementById("favCount");
const favBadge = document.getElementById("favBadge");
const favEmpty = document.getElementById("favEmpty");
const favList = document.getElementById("favList");
const carModal = document.getElementById("carModal");
const closeModal = document.getElementById("closeModal");
const modalBody = document.getElementById("modalBody");

// document.querySelector() — select the FIRST matching element
const firstNavLink = document.querySelector(".nav-links a");

// document.querySelectorAll() — select ALL matching elements
const navLinkItems = document.querySelectorAll(".nav-links a");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const dateTime = document.getElementById("dateTime");
const counters = document.querySelectorAll(".counter");
const carSelect = document.getElementById("carSelect");
const priceOutput = document.getElementById("priceOutput");
const bookingForm = document.getElementById("bookingForm");
const bookingCar = document.getElementById("bookingCar");
const enquiryForm = document.getElementById("enquiryForm");
const enquiryVehicle = document.getElementById("enquiryVehicle");


/* ------------------------------------------------------------
   Helper function used across the page.
   ------------------------------------------------------------ */
function formatPrice(price) {
    return "$" + price.toLocaleString("en-US");
}


/* ------------------------------------------------------------
   3. DOM MANIPULATION — render the vehicle cards
   ------------------------------------------------------------
   Callback usage: vehicles.map() builds one HTML string per car,
   then the grid's innerHTML is replaced in one go. */
function renderCarCards() {
    const html = vehicles.map((vehicle) => {
        return `
            <article class="car-card" data-id="${vehicle.id}">
                <div class="card-media">
                    <img src="${vehicle.image}" alt="${vehicle.name} illustration">
                    <span class="type-badge">${vehicle.type}</span>
                    <button class="fav-btn" data-id="${vehicle.id}" aria-label="Save ${vehicle.name} to favourites">♡</button>
                </div>
                <div class="car-info">
                    <h3>${vehicle.name}</h3>
                    <p>${vehicle.description}</p>
                    <p class="hover-hint">${vehicle.mileage} &middot; ${vehicle.transmission} &middot; ${vehicle.fuel}</p>
                    <strong>${formatPrice(vehicle.price)}</strong>
                    <button class="details-btn" data-id="${vehicle.id}">View Details</button>
                </div>
            </article>
        `;
    }).join("");

    carGrid.innerHTML = html;
}


/* ------------------------------------------------------------
   4. DOM EVENTS + CALLBACKS — attach listeners to every card
   ------------------------------------------------------------ */
function attachCardEvents() {
    // querySelectorAll() returns the freshly created cards.
    const cards = document.querySelectorAll(".car-card");

    // Callback: forEach() runs a function once per card.
    cards.forEach((card) => {
        const id = card.dataset.id;

        // click event — favourite button
        const favBtn = card.querySelector(".fav-btn");
        favBtn.addEventListener("click", () => toggleFavourite(id));

        // click event — "View Details" button opens the modal
        const detailsBtn = card.querySelector(".details-btn");
        detailsBtn.addEventListener("click", () => openDetails(id));

        // mouseover event — highlight the card + reveal extra info
        card.addEventListener("mouseover", () => card.classList.add("card-hover"));

        // mouseout event — remove the highlight
        card.addEventListener("mouseout", () => card.classList.remove("card-hover"));
    });
}


/* ------------------------------------------------------------
   5. SEARCH / FILTER — search, brand, price and vehicle type
   ------------------------------------------------------------
   Callback usage: filter() decides which vehicles match, then
   map() collects the matching ids, and forEach() shows/hides the
   cards using the style property (DOM manipulation). */
function applyFilters() {
    const searchText = carSearch.value.toLowerCase().trim();
    const brandValue = brandFilter.value;
    const typeValue = typeFilter.value;
    const budgetValue = budgetFilter.value;

    const filtered = vehicles.filter((vehicle) => {
        const matchesSearch =
            vehicle.name.toLowerCase().includes(searchText) ||
            vehicle.brand.toLowerCase().includes(searchText) ||
            vehicle.type.toLowerCase().includes(searchText);

        const matchesBrand = brandValue === "all" || vehicle.brand === brandValue;
        const matchesType = typeValue === "all" || vehicle.type === typeValue;

        const matchesBudget =
            budgetValue === "all" ||
            (budgetValue === "low" && vehicle.price < 150000) ||
            (budgetValue === "high" && vehicle.price >= 150000);

        return matchesSearch && matchesBrand && matchesType && matchesBudget;
    });

    const visibleIds = filtered.map((vehicle) => vehicle.id);

    const cards = document.querySelectorAll(".car-card");
    cards.forEach((card) => {
        const show = visibleIds.includes(card.dataset.id);
        card.style.display = show ? "block" : "none";
    });

    // DOM manipulation: update the results counter text.
    resultsInfo.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${vehicles.length}</strong> vehicles`;

    // Show or hide the "no results" message with the style property.
    noCars.style.display = filtered.length === 0 ? "block" : "none";
}

// input event fires on every keystroke in the search box.
carSearch.addEventListener("input", applyFilters);

// change event fires when the user picks a different option.
brandFilter.addEventListener("change", applyFilters);
typeFilter.addEventListener("change", applyFilters);
budgetFilter.addEventListener("change", applyFilters);


/* ------------------------------------------------------------
   6. FAVOURITES — add and remove saved vehicles
   ------------------------------------------------------------ */
const favouriteVehicles = [];

function toggleFavourite(id) {
    const index = favouriteVehicles.indexOf(id);

    if (index === -1) {
        favouriteVehicles.push(id);
    } else {
        favouriteVehicles.splice(index, 1);
    }

    updateFavouritesUI();
}

function updateFavouritesUI() {
    // Update every heart button using classList and textContent.
    const buttons = document.querySelectorAll(".fav-btn");
    buttons.forEach((button) => {
        const isFavourite = favouriteVehicles.includes(button.dataset.id);
        button.classList.toggle("active", isFavourite);
        button.textContent = isFavourite ? "♥" : "♡";
    });

    // Update the favourites counter in the navigation.
    favCount.textContent = favouriteVehicles.length;
    favBadge.classList.toggle("active", favouriteVehicles.length > 0);

    renderFavourites();
}

function renderFavourites() {
    if (favouriteVehicles.length === 0) {
        // Show the empty message, clear the list (DOM manipulation).
        favEmpty.classList.remove("hidden");
        favList.innerHTML = "";
        return;
    }

    favEmpty.classList.add("hidden");

    // filter() + map() callbacks build the saved vehicle cards.
    const favouriteCars = vehicles.filter((vehicle) => favouriteVehicles.includes(vehicle.id));
    favList.innerHTML = favouriteCars.map((vehicle) => {
        return `
            <article class="fav-item">
                <img src="${vehicle.image}" alt="${vehicle.name} illustration">
                <div>
                    <h4>${vehicle.name}</h4>
                    <span>${formatPrice(vehicle.price)}</span>
                </div>
                <button class="fav-remove" data-id="${vehicle.id}">Remove</button>
            </article>
        `;
    }).join("");

    // Attach a click listener to every Remove button (forEach callback).
    document.querySelectorAll(".fav-remove").forEach((button) => {
        button.addEventListener("click", () => toggleFavourite(button.dataset.id));
    });
}

// click event — the heart in the navigation scrolls to favourites.
favBadge.addEventListener("click", () => {
    document.getElementById("favourites").scrollIntoView({ behavior: "smooth" });
});


/* ------------------------------------------------------------
   7. VEHICLE DETAILS MODAL
   ------------------------------------------------------------
   The modal content is built entirely with innerHTML + map().
   No separate page is needed for each vehicle. */
function openDetails(id) {
    const vehicle = vehicles.find((item) => item.id === id);
    if (!vehicle) return;

    const specs = [
        ["Brand", vehicle.brand],
        ["Model", vehicle.model],
        ["Year", vehicle.year],
        ["Mileage", vehicle.mileage],
        ["Transmission", vehicle.transmission],
        ["Fuel Type", vehicle.fuel],
        ["Type", vehicle.type]
    ];

    // map() callback turns each spec into a small HTML row.
    const specHtml = specs.map((spec) => {
        return `<div class="spec-row"><span>${spec[0]}</span><strong>${spec[1]}</strong></div>`;
    }).join("");

    modalBody.innerHTML = `
        <img class="modal-img" src="${vehicle.image}" alt="${vehicle.name} illustration">
        <h2>${vehicle.name}</h2>
        <p class="modal-desc">${vehicle.description}</p>
        <div class="spec-list">${specHtml}</div>
        <p class="modal-price">${formatPrice(vehicle.price)}</p>
    `;

    // Show the modal with classList and update accessibility.
    carModal.classList.add("show");
    carModal.setAttribute("aria-hidden", "false");
}

function closeDetails() {
    carModal.classList.remove("show");
    carModal.setAttribute("aria-hidden", "true");
}

// click events for closing the modal.
closeModal.addEventListener("click", closeDetails);
carModal.addEventListener("click", (event) => {
    if (event.target === carModal) closeDetails();
});

// keydown event — Escape key closes the modal.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDetails();
});


/* ------------------------------------------------------------
   8. POPULATE SELECT MENUS FROM THE VEHICLE DATA
   ------------------------------------------------------------
   createElement + appendChild + forEach add real <option> nodes
   to each select. */
function populateVehicleSelect(selectElement) {
    // Clear existing options first.
    selectElement.innerHTML = '<option value="">Choose a car</option>';

    vehicles.forEach((vehicle) => {
        const option = document.createElement("option");
        option.value = vehicle.name;
        option.textContent = vehicle.name;
        selectElement.appendChild(option);
    });
}

// Populate the brand and type filter menus (Set keeps unique values).
const brands = [...new Set(vehicles.map((vehicle) => vehicle.brand))];
brands.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
});

const vehicleTypes = [...new Set(vehicles.map((vehicle) => vehicle.type))];
vehicleTypes.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
});

populateVehicleSelect(bookingCar);
populateVehicleSelect(enquiryVehicle);

// Price display menu uses the price number as the option value.
vehicles.forEach((vehicle) => {
    const option = document.createElement("option");
    option.value = vehicle.price;
    option.textContent = vehicle.name;
    carSelect.appendChild(option);
});

// change event — show the price of the selected car.
carSelect.addEventListener("change", () => {
    const price = Number(carSelect.value);
    priceOutput.textContent = price
        ? "Estimated price: " + formatPrice(price)
        : "Price will appear here.";
});


/* ------------------------------------------------------------
   9. EXISTING FEATURES — kept from the original webpage
   ------------------------------------------------------------ */

// Mobile menu toggle (click event).
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close the mobile menu after clicking a link.
navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        navLinks.classList.remove("show");
    }
});

// Show current date and time (setInterval callback).
function updateDateTime() {
    dateTime.textContent = new Date().toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Theme switching saved with localStorage.
const savedTheme = localStorage.getItem("irooTheme");
if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "Dark Mode";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    themeToggle.textContent = isLight ? "Dark Mode" : "Light Mode";
    localStorage.setItem("irooTheme", isLight ? "light" : "dark");
});

// Animated statistics counters (setInterval callback).
function animateCounters() {
    counters.forEach((counter) => {
        const target = Number(counter.dataset.target);
        let current = 0;
        const increment = Math.ceil(target / 45);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = current;
            }
        }, 25);
    });
}
animateCounters();

// Booking form validation.
bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const chosenCar = bookingCar.value;
    const inspectionDate = document.getElementById("inspectionDate").value;

    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const carError = document.getElementById("carError");
    const dateError = document.getElementById("dateError");
    const bookingSuccess = document.getElementById("bookingSuccess");

    nameError.textContent = "";
    phoneError.textContent = "";
    carError.textContent = "";
    dateError.textContent = "";
    bookingSuccess.textContent = "";

    let isValid = true;

    if (fullName.length < 3) {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    if (!/^\+?[0-9\s-]{7,20}$/.test(phone)) {
        phoneError.textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    if (chosenCar === "") {
        carError.textContent = "Please choose a car model.";
        isValid = false;
    }

    if (inspectionDate === "") {
        dateError.textContent = "Please select an inspection date.";
        isValid = false;
    } else {
        const selectedDate = new Date(inspectionDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            dateError.textContent = "Inspection date cannot be in the past.";
            isValid = false;
        }
    }

    if (isValid) {
        const reference = "IROO-" + Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem("latestBookingReference", reference);
        bookingSuccess.textContent = `Booking submitted successfully. Your reference number is ${reference}.`;
        bookingForm.reset();
    }
});


/* ------------------------------------------------------------
   10. ENQUIRY FORM — submit event, validation and message
   ------------------------------------------------------------
   The success message is created with textContent (DOM
   manipulation) and cleared later using a setTimeout callback. */
enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const enquiryName = document.getElementById("enquiryName").value.trim();
    const enquiryEmail = document.getElementById("enquiryEmail").value.trim();
    const enquiryPhone = document.getElementById("enquiryPhone").value.trim();
    const chosenVehicle = enquiryVehicle.value;
    const message = document.getElementById("message").value.trim();

    const enquiryNameError = document.getElementById("enquiryNameError");
    const enquiryEmailError = document.getElementById("enquiryEmailError");
    const enquiryPhoneError = document.getElementById("enquiryPhoneError");
    const enquiryVehicleError = document.getElementById("enquiryVehicleError");
    const messageError = document.getElementById("messageError");
    const enquirySuccess = document.getElementById("enquirySuccess");

    enquiryNameError.textContent = "";
    enquiryEmailError.textContent = "";
    enquiryPhoneError.textContent = "";
    enquiryVehicleError.textContent = "";
    messageError.textContent = "";
    enquirySuccess.textContent = "";

    let isValid = true;

    if (enquiryName.length < 2) {
        enquiryNameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiryEmail)) {
        enquiryEmailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!/^\+?[0-9\s-]{7,20}$/.test(enquiryPhone)) {
        enquiryPhoneError.textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    if (chosenVehicle === "") {
        enquiryVehicleError.textContent = "Please choose a vehicle.";
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        isValid = false;
    }

    if (isValid) {
        // DOM manipulation: create the success message with textContent.
        enquirySuccess.textContent = `Thank you, ${enquiryName}. Your enquiry about the ${chosenVehicle} has been received. We will contact you soon.`;

        // Callback function: clear the message after 6 seconds.
        setTimeout(() => {
            enquirySuccess.textContent = "";
        }, 6000);

        enquiryForm.reset();
    }
});


/* ------------------------------------------------------------
   11. INITIALISE THE PAGE
   ------------------------------------------------------------ */
renderCarCards();      // create the vehicle cards in the DOM
attachCardEvents();    // attach event listeners to the cards
applyFilters();        // show the correct starting results count
