FROM node:14

WORKDIR /app

RUN addgroup app && \
  adduser --uid 1001 --ingroup app --home /app --shell /bin/bash --disabled-password app

RUN chown 1001:app /app -R

COPY --chown=1001:app ./public ./public

COPY --chown=1001:app ./src .

COPY --chown=1001:app package.json yarn.lock ./

USER app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]