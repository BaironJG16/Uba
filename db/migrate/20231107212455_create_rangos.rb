class CreateRangos < ActiveRecord::Migration[7.0]
  def change
    create_table :rangos do |t|
      t.string :description

      t.timestamps
    end
  end
end
