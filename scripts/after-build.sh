#!/bin/bash

exp login -u $TRAVIS_EXP_LOGIN -p "$TRAVIS_EXP_PASSWORD"
exp publish -q --non-interactive  --release-channel test