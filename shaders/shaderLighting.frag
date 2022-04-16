uniform sampler2D currentTexture;
uniform int radius;
uniform float positionx;
uniform float positiony;

void main() {
	vec2 coord = vec2(gl_FragCoord.x,768.0 - gl_FragCoord.y);
	vec2 pos = vec2(positionx, positiony);
	float alpha = 0.8;

	float dist = length(coord-pos);
	if(dist < radius)
	{
		alpha = dist / radius - 0.2;
	}

	gl_FragColor = vec4 (0,0,0 , alpha);
}