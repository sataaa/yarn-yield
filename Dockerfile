FROM node:14 as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

FROM node:14

WORKDIR /app

RUN addgroup app && \
  adduser --uid 1001 --ingroup app --home /app --shell /bin/bash --disabled-password app

RUN chown 1001:app /app -R

COPY --chown=1001:app ./public ./public

COPY --from=builder --chown=1001:app ./app .

COPY --chown=1001:app ./src .

USER app

EXPOSE 3000

CMD ["yarn", "start"]