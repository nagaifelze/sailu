Generate HTML report from Allure results
The Reporter will generate xml files inside of a resultsDir, then we need to generate HTML out of them.

Using Maven
In this method, we will use Maven. Copy ready-to-use pom.xml from node_modules/jasmine-allure-reporter and run:

mvn site -Dallure.results_pattern=allure-results

It will put HTMLs into target/site/allure-maven-plugin folder. To serve them via localhost:1324 use:

mvn jetty:run -Djetty.port=1234