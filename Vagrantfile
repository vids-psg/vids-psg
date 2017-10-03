Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network :forwarded_port, guest: 8080, host: 8080
    config.vm.provision "shell", inline: <<-SHELL
        curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
        curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
        echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
        apt-get update
        apt-get install -y nodejs yarn
    SHELL
end
