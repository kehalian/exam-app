<template>
  <div class="w-10/12 bg-black bg-opacity-60 m-auto flex rounded-3xl shadow">
    <div class="w-full">
      <div>
        <div class="w-full flex justify-between items-center">
          <p class="text-4xl text-gray-200 font-roboto text-left px-5 py-3">
            Document Details
          </p>
          <div class="flex space-x-3 mr-3">
            <button class="bg-gray-400 rounded-md px-4 py-2 text-white">
              Upload Document
            </button>
            <button class="bg-gray-400 rounded-md px-4 py-2 text-white">
              Setup Details
            </button>
          </div>
        </div>
        <p class="text-gray-600 font-roboto text-left px-5">
          the most important thing feature in the exam editing section is the
          product adding part, when adding product here, do not ignore to fill
          in the required fields completely and follow the product adding rules.
        </p>
        <!-- <div class="mt-5">
          <ul class="flex font-roboto text-xl px-5">
            <li>Overview</li>
            <li>+Add Document</li>
          </ul>
        </div> -->
      </div>

      <div
        class="
          w-11/12
          h-32
          mt-5
          border-gray-600 border-2
          m-auto
          mb-5
          rounded-lg
          flex
          justify-center
          items-center
          bg-gray-400
          opacity-50
          hover:opacity-100
          cursor-pointer
        "
      >
        <div class="flex flex-col items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
              />
              <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
            </svg>
          </span>
          <span class="text-white"> Click to Upload or Drag and drop </span>
        </div>
      </div>
      <div
        class="
          w-11/12
          border-2 border-gray-400 border-opacity-30
          m-auto
          mb-5
          rounded-lg
          text-gray-300
          h-24
          flex-col
        "
      >
        <div class="w-10/12 m-auto mt-3 text-left flex items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span class="font-roboto text-pink-500"> File Name.doc </span>
        </div>
        <div>
          <div
            class="
              w-10/12
              m-auto
              mt-3
              bg-gray-200
              rounded-full
              dark:bg-gray-700
            "
          >
            <div
              class="
                bg-blue-600
                text-xs
                font-medium
                text-blue-100 text-center
                p-0.5
                leading-none
                rounded-full
              "
              style="width: 45%"
            >
              45%
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          w-11/12
          border-2 border-gray-400 border-opacity-30
          m-auto
          mb-5
          rounded-lg
          text-gray-300
        "
      >
        <div class="flex items-center justify-between">
          <div class="flex flex-col p-5 text-left">
            <span class="font font-roboto text-2xl">Attached Files</span>
            <span>File and assets that have been uploaded for exam</span>
          </div>
          <div class="p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>