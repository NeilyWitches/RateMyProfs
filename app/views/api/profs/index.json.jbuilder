@profs.each do |prof|
    json.set! prof.id do
        json.partial! 'prof', prof: prof
    end
end