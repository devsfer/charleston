function constructHiltonUrl() {
  // Get the check-in and check-out dates entered by the user
  var checkInDate = document.getElementById("check-in-input").value;
  var checkOutDate = document.getElementById("check-out-input").value;

  // Extract the arrivalDate and departureDate values from the URL
  var url = new URL("https://www.hilton.com/en/search/?query=Charleston%2C%20South%20Carolina%2C%20US&arrivalDate=2023-04-09&departureDate=2023-04-19&flexibleDates=false&numRooms=1&numAdults=1&numChildren=0&room1ChildAges=&room1AdultAges=&specialRateTokens=&displayCurrency=LOCAL&sortBy=DISTANCE");
  var arrivalDate = url.searchParams.get("arrivalDate");
  var departureDate = url.searchParams.get("departureDate");

  // Replace the arrivalDate and departureDate values with the ones entered by the user
  url.searchParams.set("arrivalDate", checkInDate);
  url.searchParams.set("departureDate", checkOutDate);

  // Get the updated URL string
  var hiltonUrl = url.toString();

  // Open the Hilton URL in a new window/tab
  window.open(hiltonUrl);
}