<template>
  <div class="md:col-span-1">
    <div class="px-4 sm:px-0">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Your idea</label
            >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>
          <div>
            <label
              for="name"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Idea Category</label
            >
            <div class="relative">
              <select
                class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              >
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
              <div
                class="pointer-events-none absolute top-4 right-3 flex items-center px-2 text-grey-darker"
              >
                <svg
                  class="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Description</label
            >
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Description"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              required
            ></textarea>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Idea
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
