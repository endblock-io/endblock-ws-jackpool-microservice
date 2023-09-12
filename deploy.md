 
connect :
sudo ssh -i "key/keypair-endblock.pem" ec2-user@ec2-18-192-10-122.eu-central-1.compute.amazonaws.com


Send to server:
sudo scp -i keypair-endblock.pem /Users/jorgealcazar/Documents/GitHub/endblock-ws-jackpool-microservice.zip ec2-user@ec2-18-192-10-122.eu-central-1.compute.amazonaws.com:/tmp/endblock-ws-jackpool-microservice.zip

cp /tmp/endblock-ws-jackpool-microservice.zip .

unzip endblock-ws-jackpool-microservice.zip