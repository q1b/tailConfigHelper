<template>
    <section class="max-w-9xl flex flex-col" :style="{ height: windowHeight }">
        <div
            class="
                w-full
                bg-gradient-to-tr
                from-blue-600
                via-lightBlue-500
                to-cyan-300
                select-none
            "
        >
            <div
                class="
                    max-w-7xl
                    mx-auto
                    py-12
                    px-4
                    sm:px-6
                    md:py-16
                    md:px-8
                    md:flex
                    md:items-center
                    md:justify-between
                "
            >
                <h1
                    class="
                        text-6xl
                        xss:text-7xl
                        xs:text-8xl
                        lg:text-9xl
                        font-round
                        text-white
                    "
                    style=""
                >
                    <span
                        class="block text-lightBlue-600"
                        style="
                            text-shadow: 0px 0px 10px #81f4ff,0px 0px 20px #00e8fe;
                        "
                        >Sukhpreet</span
                    >
                    <span
                        class="block text-lightBlue-100"
                        style="
                            text-shadow: 0px 0px 10px #9ff, 0px 0px 10px #0ff;
                        "
                        >Singh</span
                    >
                </h1>
                <div class="mt-8 flex md:mt-0 md:flex-shrink-0">
                    <div
                        class="inline-flex rounded-md shadow"
                        style="box-shadow: 0px 0px 10px 0.5px #1c90fe99"
                    >
                        <a
                            href="#"
                            class="
                                inline-flex
                                items-center
                                justify-center
                                px-5
                                py-3
                                border border-transparent
                                text-base
                                font-medium
                                rounded-md
                                text-white
                                bg-blue-600
                                hover:bg-blue-700
                            "
                        >
                            Projects
                        </a>
                    </div>
                    <div
                        class="ml-3 lg:ml-7 inline-flex rounded-md shadow"
                        style="box-shadow: 0px 0px 10px 0.5px #fff"
                    >
                        <a
                            href="#"
                            class="
                                inline-flex
                                items-center
                                justify-center
                                px-5
                                py-3
                                border border-transparent
                                text-base
                                font-medium
                                rounded-md
                                text-blue-600
                                bg-white
                                hover:bg-indigo-50
                            "
                        >
                            Skills
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section
            class="
                lg:px-20
                lg:py-10
                sm:py-5
                sm:px-16
                xs:px-10
                xs:py-4
                xs:text-lg
                xss:px-8
                xss:py-4
                text-normal
                bg-gradient-to-br
                from-blue-600
                via-lightBlue-500
                to-lightBlue-800
            "
        >
            <article class="bg-white p-4 xss:rounded-lg font-bold minh100px]">
                <h1 class="text-xl text-blue-500">
                    I am a Web developer, along with learning and exploring
                    things I am also very facinate about the upcomming web
                    technologies like A.I, Cloud computing and Quantum
                    Computers. I am self-taught developer and Check out What I
                    am Doing!
                </h1>
            </article>
        </section>
        <section class="flex-shrink items-center flex py-10 place-content-center max-h-96 h-full bg-[hsl(220,40%,10%)]">
            <fieldset class="border-2 rounded-lg border-white flex p-2 xss:p-3 xs:p-4 sm:p-5 md:p-7 lg:p-10">
                <legend class="text-white xss:text-xl px-2">You might like to know</legend>
                <div class="mr-2 xss:mr-4 transform -translate-y-1 w-max h-auto">
                    <h1 class="text-center xs:px-10 p-3  xs:py-5 rounded-lg xss:rounded-3xl bg-blueGray-700 text-white" style="box-shadow:inset 0px 0px 10px 1px #FFFFFF42,0px 0px 10px 2px #000000">Past Of Mine</h1>
                </div>
                <div class="ml-2 xss:ml-4 transform -translate-y-1 w-max h-auto">
                    <h1 class="text-center xs:px-10 p-3  xs:py-5 rounded-lg xss:rounded-3xl bg-blueGray-700 text-white" style="box-shadow:inset 0px 0px 10px 1px #FFFFFF42,0px 0px 10px 2px #000000">Future Sights</h1>
                </div>
            </fieldset>
        </section>
        <footer class="mt-auto ">
            <div class="bg-[#000716]">
                <div
                    class="
                        container
                        mx-auto
                        py-4
                        px-5
                        flex flex-wrap flex-col
                        sm:flex-row
                    "
                >
                    <p class="text-gray-500 text-sm text-center sm:text-left">
                        © 2021 Sukhpreet —
                        <a
                            href="https://twitter.com/Sukhpreet_LION"
                            rel="noopener noreferrer"
                            class="text-gray-600 ml-1"
                            target="_blank"
                            >@Sukhpreet_LION</a
                        >
                    </p>
                    <span
                        class="
                            inline-flex
                            sm:ml-auto
                            sm:mt-0
                            mt-2
                            justify-center
                            sm:justify-start
                        "
                    >
                        <a class="text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                ></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                ></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path
                                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                ></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="0"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle
                                    cx="4"
                                    cy="4"
                                    r="2"
                                    stroke="none"
                                ></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    </section>
</template>

<script>
export default {

}
</script>

<style></style>
