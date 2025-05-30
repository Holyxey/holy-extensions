<script setup lang="ts">
  import { useTemplateRef, computed } from 'vue'
  import type { CookiesModalOptions } from './types'

  const referrerLink = `https://adstarget.ru/web-development?utm_source=holyxey.com&utm_medium=cookies_modal&utm_campaign=${location.host}`

  const props = defineProps<CookiesModalOptions>()

  const isCookieAccepted = localStorage.getItem('isCookieAccepted')
  const cookieModalWrapper = useTemplateRef('cookieModalWrapper')

  // Вычисляемые CSS переменные на основе props
  const cssVariables = computed(() => ({
    '--modal-background': props.backgroundColor,
    '--modal-text': props.textColor,
    '--modal-accent': props.accentColor,
    '--modal-font': props.fontFamily + ', sans-serif',
  }))

  function acceptCookie() {
    localStorage.setItem('isCookieAccepted', 'true')
    hideModal()
  }
  function hideModal() {
    if (cookieModalWrapper.value) {
      cookieModalWrapper.value.classList.toggle('showFromBottom')
      cookieModalWrapper.value.classList.toggle('hideToBottom')
    }
  }
</script>

<template>
  <div
    :style="cssVariables"
    v-show="!isCookieAccepted"
    id="cookieModalWrapper"
    ref="cookieModalWrapper"
    class="showFromBottom"
  >
    <img
      @click="hideModal"
      id="closeIcon"
      height="25"
      width="25"
      src="https://api.iconify.design/radix-icons:cross-2.svg?color=%234f5866"
      alt="close icon"
      role="none"
    />

    <div id="cookieModalContentWrapper">
      <div id="cookieModalHeader">
        <!-- referrerLink -->
        <a
          id="cookieIcon"
          :href="referrerLink"
          target="_blank"
          title="Веб разработка AdsTarget в сотрудничестве с Holyxey"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="cookieIcon"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              :stroke="props.textColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12.058 22c4.915 0 9.006-3.506 9.884-8.141c.258-1.362-.349-1.29-1.632-1.515c-.91-.16-1.76-.777-2.077-1.756c-.215-.666-.295-.693-.998-.722c-1.449-.06-2.61-1.597-2.032-2.84c.216-.464.209-.517-.195-.832c-.707-.55-1.037-1.577-.91-2.568c.137-1.067.217-1.451-.913-1.571C7.457 1.445 2 6.02 2 11.995C2 17.52 6.503 22 12.058 22m-1.05-10h-.01m-4.99-2h-.01m6.01 8h-.01M10 6L9 7m8 7l-1 1m-9 0l1 1"
              :color="props.textColor"
            />
          </svg>
        </a>
        <p>{{ props.title }}</p>
      </div>
      <div id="cookieModalContent">
        <p>{{ props.description }}</p>

        <a id="cookiePolicyLink" target="_blank" :href="props.policyLink">
          {{ props.policyOpenText }}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              color="currentColor"
            >
              <path
                d="M10 13.229q.213.349.504.654a3.56 3.56 0 0 0 4.454.59q.391-.24.73-.59l3.239-3.372c1.43-1.49 1.43-3.904 0-5.394a3.564 3.564 0 0 0-5.183 0l-.714.743"
              />
              <path
                d="m10.97 18.14l-.713.743a3.564 3.564 0 0 1-5.184 0c-1.43-1.49-1.43-3.905 0-5.394l3.24-3.372a3.564 3.564 0 0 1 5.183 0q.291.305.504.654"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>

    <button ref="acceptCookieButton" @click="acceptCookie" id="cookieConfirm">OK</button>
  </div>
</template>

<!-- Main -->

<style scoped>
  #cookieModalWrapper,
  #cookieModalWrapper * {
    box-sizing: border-box;
    padding: 0;
    font-family: var(--modal-font);
    margin: 0;
    user-select: none;
    transition: all 0.5s var(--ease-cubic);
  }
  #cookieModalWrapper {
    z-index: 500000;
    position: fixed;
    bottom: 0.5rem;
    margin-left: 0.5rem;
    right: 0.5rem;
    width: fit-content;

    opacity: 0;

    box-shadow: 0 0 10px color-mix(in srgb, var(--modal-text) 10%, transparent);

    display: flex;
    gap: 1rem;
    background-color: var(--modal-background);
    padding: 0.5rem;
    border-radius: 2rem;
    color: var(--modal-text);
  }
  #cookieModalContentWrapper {
    flex: 1;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  #cookieModalHeader {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    /*  */
  }
  #cookieModalHeader p {
    flex: 1;
  }
  #cookieIcon {
    display: block;
  }
  #closeIcon {
    position: absolute;
    opacity: 0;
    animation: showFromBottom 0.5s 1.25s var(--ease-cubic) forwards;
    top: -2rem;
    right: 0.5rem;
    cursor: pointer;
  }
  #cookieModalContent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
  }
  #cookiePolicyLink {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none !important;
    color: var(--modal-accent) !important;
  }
  button#cookieConfirm {
    padding: 1rem;
    background-color: var(--modal-accent);
    color: var(--modal-background);
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 1rem 1.5rem 1.5rem 1rem;
    border: 1px solid transparent;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 0.5rem color-mix(in srgb, #000000 10%, transparent) inset;

    &:hover {
      background-color: var(--modal-background);
      border: 1px solid var(--modal-accent);
      color: var(--modal-text);
      border-radius: 1.5rem;
      box-shadow: 0.5rem 0 0.5rem -0.25rem color-mix(in srgb, var(--modal-text) 15%, transparent);
      transform: translateX(-10%);
    }
    &:active {
      scale: 0.95;
    }
  }
</style>

<!-- Media -->

<style scoped>
  @media (max-width: 460px) {
    #cookieModalWrapper {
      text-align: center;
      bottom: 0.25rem;
      margin-left: 0;
      right: 0.25rem;
      left: 0.25rem;
      max-width: unset;
      width: unset;
      border-radius: 1rem;
      flex-direction: column;
      padding: 0.5rem;
    }
    #cookieModalHeader {
      font-size: 1.2rem;
    }
    #cookieModalContentWrapper {
      padding: 0.5rem;
    }
    #cookieModalContent {
      font-size: 1rem;
    }
    #cookiePolicyLink {
      justify-content: center;
    }
    #cookieIcon {
      display: none;
    }
    button#cookieConfirm {
      padding: 0.5rem;
      border-radius: 0.5rem;
      font-size: 1.25rem;
      &:hover {
        transform: unset;
        border-radius: 0.5rem;
        box-shadow: none;
      }
    }
  }
</style>
