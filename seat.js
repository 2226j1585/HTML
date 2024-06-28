document.addEventListener('DOMContentLoaded', function() {
  const seats = document.querySelectorAll('.seat:not(.occupied)');
  const selectedSeatsElem = document.getElementById('selected-seats'); // Update to match your HTML structure
  const totalPriceElem = document.getElementById('total-price'); // Update to match your HTML structure
  const movieSelect = document.getElementById('movie');

  let ticketPrice = 100; // Fixed price per seat

  // Function to update selected seats count and total price
  function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll('.row .seat.selected');
      const selectedSeatsCount = selectedSeats.length;

      selectedSeatsElem.textContent = selectedSeatsCount;
      totalPriceElem.textContent = selectedSeatsCount * ticketPrice;
  }

  // Movie select event
  movieSelect.addEventListener('change', e => {
      ticketPrice = parseInt(e.target.value); // Assuming movie value might be a custom price; adjust as needed
      updateSelectedCount();
  });

  // Seat click event
  document.querySelector('.container').addEventListener('click', e => {
      if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
          e.target.classList.toggle('selected');
          updateSelectedCount();
      }
  });

  // Initial count and total set
  updateSelectedCount();
});
