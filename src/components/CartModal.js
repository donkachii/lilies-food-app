import React from "react";

function CartModal() {
  return (
    <div
      id="orderModal"
      tabindex="-1"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700"></div>
      </div>
    </div>
  );
}

export default CartModal;
