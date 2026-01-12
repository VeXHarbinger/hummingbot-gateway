# Application ConfigurationParameters Glossary

Here is your consolidated glossary of all the .env settings you can pass into Hummingbot components

## Hummingbot Core

* RATE_ORACLE_DEFAULT=
  Sets the default Rate Oracle

## Hummingbot API

* USERNAME=
  Username for API basic authentication.
* PASSWORD=
  Password for API basic authentication.
* DEBUG_MODE=
  Enables or disables debug mode for API.
* CONFIG_PASSWORD=
  Password for configuration encryption/decryption.
* HUMMINGBOT_USERNAME=
  Username for Hummingbot API authentication.
* HUMMINGBOT_PASSWORD=
  Password for Hummingbot API authentication.
* HUMMINGBOT_API_URL=
  URL for Hummingbot API service.
* DATABASE_URL=
  Connection string for the Postgres database.
* API_URL=
  Public API URL used by other services.

## Hummingbot Gateway

* GATEWAY_PASSPHRASE=
  Passphrase for encrypting/decrypting gateway config and wallet files.
* DEV=
  Enables development mode (hot reload, verbose logging, etc.).
* INSTALLATION_TYPE=
  Indicates the installation type (docker, local, etc.).
* COMMIT_BRANCH=
  Git branch name for build labeling/version tracking.
* COMMIT_SHA=
  Git commit SHA for build labeling/version tracking.
* BUILD_DATE=
  Build date for the current image or deployment.
* GATEWAY_URL=
  URL for the Gateway service.

## MQTT Broker (EMQX)

* BROKER_HOST=
  Hostname for the MQTT broker.
* BROKER_PORT=
  Port for the MQTT broker.
* BROKER_USERNAME=
  Username for MQTT broker authentication.
* BROKER_PASSWORD=
  Password for MQTT broker authentication.

## Paths

* BOTS_PATH=
  Path to bots/scripts directory.

## API Keys

* BSCSCAN_API_KEY=
  BscScan API key for blockchain lookups.
* COINGECKO_API_KEY=
  CoinGecko API key for price lookups.
