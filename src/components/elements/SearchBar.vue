<template>
  <div class="flex">
    <div
      class="
        w-full
        rounded-tl-lg rounded-bl-lg
        border-2 border-gray-600 border-r-0
      "
    >
      <input
        class="
          w-full
          h-full
          outline-none
          p-1
          px-3
          rounded-tl-lg rounded-bl-lg
          bg-black
          font-lora
          text-gray-400
        "
        placeholder="Search Courses , items , Exams ...."
        type="text"
      />
    </div>
    <div
      class="
        w-1/12
        text-blue-400
        border-gray-600 border-2
        rounded-tr-lg rounded-br-lg
      "
    >
      <button class="p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>