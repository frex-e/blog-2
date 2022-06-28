<template>
	<Title>Hi</Title>
	<Date>23rd of June, 2019</Date>
	<h1>Title</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dolor rutrum, luctus elit vitae, ullamcorper
		nulla. Aenean quis enim ornare, dictum est eu, tincidunt augue. Morbi imperdiet diam non
	</p>

	<p>
		sodales accumsan. Etiam aliquam velit at turpis iaculis pellentesque. Praesent in convallis orci, vel luctus lectus.
		Nullam iaculis vitae ex non elementum. Etiam consectetur nisi a nibh efficitur, eget accumsan sem posuere. Maecenas
		nec urna lacus. Sed ut consequat tellus. Maecenas tincidunt felis sit amet massa tincidunt, euismod pretium lacus
		suscipit. Nunc porttitor condimentum dignissim. Morbi arcu leo, ullamcorper euismod scelerisque at, suscipit vitae
		nunc. Proin quis ipsum eget elit tempus pharetra vitae rutrum ipsum. Mauris aliquam felis fringilla, porttitor mi
		eget, venenatis tellus. Sed tempus justo eget ex malesuada, non maximus odio malesuada. Quisque quis sodales velit,
		sagittis semper elit. Some more text.
	</p>
	<h2>Subtitle</h2>
	<p>
		Vivamus ut interdum nibh, sed sagittis tortor. Donec nec felis vel risus dictum varius id a tortor. Quisque
		efficitur maximus leo, sed sollicitudin magna accumsan sit amet. Mauris auctor at magna sit amet efficitur. Nam
		imperdiet auctor leo eu luctus.
	</p>

	<p>
		Integer at lacus vitae nulla vehicula malesuada. In consectetur rutrum aliquam. Phasellus posuere, dolor quis
		gravida sodales, augue purus condimentum nisi, ut viverra mauris leo et purus. Duis quis interdum turpis, non
		hendrerit massa. Aliquam vestibulum tortor in varius rutrum. Aliquam erat volutpat. Cras venenatis nisl elit, id
		finibus ligula vehicula vitae. Aenean sed massa eu dui imperdiet consequat. Suspendisse risus orci, efficitur a ante
		non, venenatis consectetur massa.
	</p>

	<CodeBlock lang="js">let a = 2;</CodeBlock>
	<h3>SubSubTitle</h3>
	A lot of text and crap I want to fuxking die.

	<GraphWrapper uuid="first" :func="first" class="h-15">
	</GraphWrapper>
</template>

<!-- <script>
import { createCanvas } from 'algorithmx'
export default {
	mounted() {
		const first = createCanvas('first')
		first.nodes([1, 2, 3]).add().color('blue');
	}
}
</script> -->

<script setup lang="ts">
import { Canvas } from 'algorithmx';

const first = (canvas: Canvas) => {
	canvas.nodes([1, 2, 3]).add();
}
</script>