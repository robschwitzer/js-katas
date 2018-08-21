function domainName(url){
    url = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0]
    return url.substring(0, url.indexOf('.'))
}
console.log(domainName('https://www.f6p048o6g.it'))