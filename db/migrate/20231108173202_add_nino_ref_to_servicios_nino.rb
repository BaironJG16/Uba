class AddNinoRefToServiciosNino < ActiveRecord::Migration[7.0]
  def change
    add_reference :servicios_ninos, :nino, null: false, foreign_key: true
  end
end