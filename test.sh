for testcase in $(/usr/bin/env find test -type d -depth 1); do
  pushd $testcase
  /usr/bin/env node ./run.js
  popd
done
