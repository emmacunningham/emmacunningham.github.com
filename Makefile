css-watch:
	@compass watch --sass-dir sass_src/ --images-dir img --css-dir css/ --relative-assets --force --no-line-comments

server:
	python -m SimpleHTTPServer

.PHONY: css-watch