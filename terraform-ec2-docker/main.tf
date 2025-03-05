provider "aws" {
  region = "ap-southeast-2"
}

resource "aws_instance" "jenkins_server" {
  ami           = "ami-09e143e99e8fa74f9"  # Ubuntu 20.04
  instance_type = "t2.micro"
  key_name      = "EC2_DevOps"

  tags = {
    Name = "Jenkins-Server"
  }
}
