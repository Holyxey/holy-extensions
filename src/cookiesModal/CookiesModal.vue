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
        <a
          :href="referrerLink"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Веб разработка от Holyxey в сотрудничестве с AdsTarget"
        >
          <img
            loading="lazy"
            id="cookieIcon"
            height="25"
            width="25"
            src="https://static.tildacdn.com/tild3564-3965-4434-b434-353830386163/radix-iconscookie.svg"
            alt="cookie icon"
            role="none"
          />
        </a>
        <p>{{ props.title }}</p>
      </div>
      <div id="cookieModalContent">
        <p>{{ props.description }}</p>
        <a :href="props.policyLink">{{ props.policyOpenText }}</a>
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
  }
  #cookieModalWrapper {
    z-index: 500000;
    position: fixed;
    bottom: 0.5rem;
    margin-left: 0.5rem;
    right: 0.5rem;
    width: fit-content;
    max-width: 450px;

    opacity: 0;

    box-shadow: 0 0 10px color-mix(in srgb, var(--modal-text) 20%, transparent) inset;

    display: flex;
    gap: 1rem;
    background-color: var(--modal-background);
    padding: 0.5rem;
    border-radius: 2rem;
    color: var(--modal-text);
  }
  #cookieModalContentWrapper {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
    line-height: 120%;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 350;
  }
  #cookieModalContent a {
    color: var(--modal-accent) !important;
  }
  button#cookieConfirm {
    padding: 1rem;
    background-color: var(--modal-accent);
    color: var(--modal-background);
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 1rem 1.5rem 1.5rem 1rem;
    border: 2px solid transparent;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: var(--modal-background);
      border: 2px solid var(--modal-accent);
      color: var(--modal-text);
      border-radius: 1.5rem;
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
    #cookieModalContentWrapper {
      padding: 0.5rem;
    }
    #cookieModalWrapper {
      text-align: center;
      bottom: 0;
      margin-left: 0;
      right: 0;
      left: 0;
      max-width: unset;
      width: unset;
      border-radius: 0;
      flex-direction: column;
      padding: 0;
      box-shadow: unset;
    }
    #cookieIcon {
      display: none;
    }
    button#cookieConfirm {
      padding: 0.5rem;
      border-radius: 0;
      font-size: 1.25rem;
      &:hover {
        transform: unset;
        border-radius: unset;
      }
    }
  }
</style>
