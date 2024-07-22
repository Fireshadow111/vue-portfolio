<template>
  <div class="outer-cursor" :style="cursorStyle">
    <div class="inner-cursor"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cursorX: 0,
      cursorY: 0,
      targetX: 0,
      targetY: 0,
      animationFrameId: null
    };
  },
  computed: {
    cursorStyle() {
      return {
        transform: `translate(${this.cursorX - 13}px, ${this.cursorY - 13}px)` 
      };
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.handleMouseMove);
    document.body.style.cursor = 'none'; 
    this.animateCursor();
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.body.style.cursor = ''; 
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  },
  methods: {
    handleMouseMove(event) {
      this.targetX = event.clientX;
      this.targetY = event.clientY;
    },

    
    animateCursor() {
      
      const speed = 1.4; 
      this.cursorX += (this.targetX - this.cursorX) * speed;
      this.cursorY += (this.targetY - this.cursorY) * speed;

      this.animationFrameId = requestAnimationFrame(this.animateCursor);
    }
  }
};
</script>

<style scoped>
.outer-cursor {
  position: fixed;
  width: 26px; 
  height: 26px; 
  border: 1px solid #fff;
  border-radius: 50%;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 9999;
  transition: none; 
}

.inner-cursor {
  position: absolute;
  width: 9.5px;
  height: 9.5px;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background-color: #ffffff;
  z-index: 5000;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  pointer-events: none;
  box-shadow: 1px 1px 7px 1px black;
}

@media (max-width: 1400px) {
  .outer-cursor, .inner-cursor {
    display: none;
  }
}
</style>
