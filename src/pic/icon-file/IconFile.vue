<template>
  <svg width="29px" height="32px" viewBox="0 0 29 32">
    {{ mime }}
    <g id="UI-Kit" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="video_online_description" transform="translate(-65.000000, -3196.000000)">
        <g id="Group-Copy-24" transform="translate(65.000000, 3196.000000)">
          <g id="Group-39" transform="translate(0.500000, 0.000000)" fill-rule="nonzero">
            <path
              d="M6.00003,0 C4.90003,0 4.00003,0.899999 4.00003,2 L4.00003,30 C4.00003,31.1 4.90003,31.9999 6.00003,31.9999 L26,31.9999 C27.1,31.9999 28,31.1 28,30 L28,8 L20,0 L6.00003,0 Z"
              id="Path"
              fill="#E2E5EB"
            ></path>
            <path
              d="M22,8 L28,8 L20,0 L20,6 C20,7.09999 20.9,8 22,8 Z"
              id="Path"
              fill="#BBC1C7"
            ></path>
            <polygon
              id="Path"
              fill="#BBC1C7"
              opacity="0.5"
              points="28 13.9999 22 7.99992 28 7.99992"
            ></polygon>
            <path
              d="M24,26 C24,26.55 23.55,27 23,27 L1,27 C0.45,27 0,26.55 0,26 L0,16 C0,15.45 0.45,15 1,15 L23,15 C23.55,15 24,15.45 24,16 L24,26 Z"
              id="Path"
              :fill="color"
            ></path>
            <path
              d="M23,26.9999 L4.00003,26.9999 L4.00003,27.9999 L23,27.9999 C23.55,27.9999 24,27.5499 24,26.9999 L24,25.9999 C24,26.5499 23.55,26.9999 23,26.9999 Z"
              id="Path"
              fill="#BBC1C7"
              opacity="0.5"
            ></path>
          </g>
          <text
            id="PNG"
            font-family="MTSSans-Regular, MTS Sans"
            font-size="9"
            font-weight="normal"
            letter-spacing="-0.3"
            fill="#FFFFFF"
          >
            <tspan :x="getSpanX(text)" y="23" style="user-select: none">
              {{ text.toLocaleUpperCase() }}
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
import { getSpanX, getIconFileProps } from './func'
export default {
  name: 'icon-file',
  props: {
    mime: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      text: '',
      color: ''
    }
  },
  methods: {
    getSpanX(text) {
      return getSpanX(text)
    }
  },
  created() {
    const { text, color } = getIconFileProps(this.mime)
    this.text = text
    this.color = color
  }
}
</script>
