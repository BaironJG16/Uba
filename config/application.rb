require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Uba
  class Application < Rails::Application
    # Inicialice los valores predeterminados de configuración para la versión de Rails generada originalmente.
    config.load_defaults 7.0

    config.api_only = true

    # Configuración de CORS
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'  # Puedes restringir esto a dominios específicos si lo deseas.
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end
  end
end
