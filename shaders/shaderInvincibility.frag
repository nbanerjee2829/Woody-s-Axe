#version 120
uniform sampler2D currentTexture;
uniform float time;

void main() {
	vec2 coord = gl_TexCoord[0].xy;
	vec4 pixel_color = texture2D(currentTexture, coord);
	float alpha=1.0;

	gl_FragColor = vec4 (0.5 + 0.5*cos(10*time),0.5 + 0.5*cos(10*time + 2),0.5 + 0.5*cos(10*time+4),pixel_color[3]);
}