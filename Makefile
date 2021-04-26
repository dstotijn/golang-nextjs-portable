.PHONY: build-nextjs
build-nextjs:
	cd nextjs; \
	yarn install; \
	NEXT_TELEMETRY_DISABLED=1 yarn run export

.PHONY: build
build: build-nextjs
	go build .