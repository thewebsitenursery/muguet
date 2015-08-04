"use strict";

var should = require('should')
  //, sinon = require('sinon')
  //, ContainersFixtures = require('../../fixtures/containers')
  , app = require('../../fixtures/app').app

describe('app', function () {


  before(function () {

    process.env.DOCKER_HOST = 'tcp://192.168.59.103:2376'
/*
    containers = [
      new DockerContainer(app, ContainersFixtures.container1.basic_info, ContainersFixtures.container1.data),
      new DockerContainer(app, ContainersFixtures.container2.basic_info, ContainersFixtures.container2.data),
      new DockerContainer(app, ContainersFixtures.container4.basic_info, ContainersFixtures.container4.data)
    ]*/
  })

  describe('.getProxyIp', function() {
    it('should return 127.0.0.1', function() {
      should(app.getProxyIp()).equal('127.0.0.1')
    });
  })

  describe('.getDockerInfos', function() {
    it('should return an object with hostname and port', function() {
      should(app.getDockerInfos()).be.Object()
      should(app.getDockerInfos()).have.property('hostname', '192.168.59.103')
      should(app.getDockerInfos()).have.property('port', '2376')
    })
  })


  describe('.run', function() {
    it('should run', function() {
      app.run()
      //app._onContainerChange(containers)
      //app._onError('Test error')

    })
  })


})