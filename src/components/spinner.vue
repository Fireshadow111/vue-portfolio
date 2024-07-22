<template>
   
   <div class="wrapper">
    <div class = "spinner-overlay">
        <div class="abstergo">
			<div class="abstergo__wrapper abstergo__wrapper--move">
	            <div class="abstergo__handler abstergo__handler-01"></div>
            </div>
			<div class="abstergo__wrapper abstergo__wrapper--move">
	            <div class="abstergo__handler abstergo__handler-02"></div>
            </div>
			<div class="abstergo__wrapper abstergo__wrapper--move">
	            <div class="abstergo__handler abstergo__handler-03"></div>
            </div>
        </div>
      </div>
    </div>
  
</template>
<script>
export default {
   name: 'spinner'
}
</script>
<style lang="scss" scoped>
    
    .spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

    $background: none;
$foreground: none;

html {
	font-size: 15px;
}
body {
	margin: 0;
	padding: 0;
	background-color: black;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
  color:#44d62c;
}

@mixin gitchText($offset, $text) {
  content: $text;
  position: absolute;
  left: $offset;
  top: $offset;
  clip: rect(0, 900px, 0, 0); 
  background-color: $background;
  color: $foreground;
  animation: glitch 3s infinite alternate-reverse;
  // animation-delay: 4s;
}

.loading-glitch {
  width:auto;
  font-size: 2em;
  letter-spacing: 0.3em;
  width:auto;
  transform: translate(-50%, 50%);
  left: 50%;
  top: 70%;    
  color: #44d62c;
  background-color: #44d62c;
  animation: fadeWhite 4s forwards;
  // animation-delay: 2s;
  position: absolute;
  &:after {
    @include gitchText(2px, attr(data-text));
  }
  &:before {
    @include gitchText(-2px, attr(data-text));
  }
}

@keyframes fadeWhite {
  100% { color: #44d62c; }
}

@keyframes glitch {
  $steps: 20;
  @for $i from 0 through $steps{
    #{percentage($i * (1 / $steps))}{
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
    }
  }
}

@keyframes move1 {
	from {
		transform: translateX(-100vw);
	}
}
@keyframes move2 {
	from {
		transform: translateY(-1800%) translateX(300%);
	}
}
@keyframes move3 {
	from {
		transform: translateY(1800%) translateX(300%);
	}
}

@keyframes spin1 {
	0%, 90% {
		transform: rotateZ(120deg);
	}
	35%, 65% {
		transform: rotateZ(240deg);
	}
}
@keyframes spin2 {
	0%, 90% {
		transform: rotateZ(-120deg);
	}
	35%, 65% {
		transform: rotateZ(0deg);
	}
}
@keyframes spin3 {
	0%, 90% {
		transform: rotateZ(0deg);
	}
	35%, 65% {
		transform: rotateZ(120deg);
	}
}

%abstergo {
	font-size: 	1rem;
	background-color: transparent;
	padding: 0px 3.3rem;
	border-bottom: 2.8rem solid #44d62c;
	border-left: 1.54rem solid transparent;
	border-right: 1.54rem solid transparent;
	display: inline-block;
	transform-origin: 50% 0%;
	filter: drop-shadow(0px 0px 2px #44d62c);
}
.abstergo {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-70%, -50%);
	font-size: 0;
	&__handler {
		&:before {
			content: "";
			@extend %abstergo;
		}
	}
	&__handler-01 {
		position: absolute;
		transform: translateX(22.5%) translateY(-110%);
		top: 0;
		left: 0;
		animation: move2 1.25s cubic-bezier(0.72, 0.12, 0.32, 1.0) 0s 1;
		&:before {
			transform: rotateZ(120deg);
			animation: spin1 2s ease-in-out 1.5s infinite backwards;
		}
	}
	&__handler-02 {
		position: absolute;
		transform: translateX(40%) translateY(15%);
		top: 0;
		left: 0;
		animation: move3 1.25s cubic-bezier(0.72, 0.12, 0.32, 1.0) 0s 1;
		&:before {
			transform: rotateZ(-120deg);
			animation: spin2 2s ease-in-out 1.5s infinite backwards;
		}
	}
	&__handler-03 {
		animation: move1 1.25s cubic-bezier(0.72, 0.12, 0.32, 1.0) 0s 1;
		&:before {
			animation: spin3 2s ease-in-out 1.5s infinite backwards;
		}
	}
}


</style>