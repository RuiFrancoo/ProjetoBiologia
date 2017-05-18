import Foundation
import Files

extension String {
    subscript (i: Int) -> Character {
        return self[self.characters.index(self.startIndex, offsetBy: i)]
    }
    
    subscript (i: Int) -> String {
        return String(self[i] as Character)
    }
}

let folder = try Folder(path: "/Users/franciscoamado/Developer/Scripts")
let aditivos = "aditivos.txt"

let file = try folder.file(named: aditivos)

let text = try file.readAsString()

var items: [(code: String, name: String?, category: String?, description: String)] = []

//let pattern = "[A-Z]{1} [0-9]{3}"
//let regex = try NSRegularExpression(pattern: pattern, options: [])

// NSRegularExpression works with objective-c NSString, which are utf16 encoded
//let matches = regex.matches(in: text, range: NSMakeRange(0, text.utf16.count))

let lines = text.components(separatedBy: .newlines)

var category: String?

lines.forEach { line in
    
    let words = line.components(separatedBy: .whitespaces)
    
    guard words.isEmpty == false else { return; }
    
    if words.first?.caseInsensitiveCompare("E") != .orderedSame {
        category = words.first
        return;
    }
    
    guard words.count >= 2 else { return; }
    
    let components = line.components(separatedBy: " - ")
    guard let code = components.first else { return; }
    
    let content = components
        .dropFirst()
        .joined()
        .components(separatedBy: ";")
    
    let name = content.first
    
    let description = content
        .dropFirst()
        .joined()
        .trimmingCharacters(in: CharacterSet.init(charactersIn: " ."))
    
    items.append((code, name, category, description))
}

var json = ""

items.forEach { item in
    json.append("\n{\"code\": \"\(item.code)\",")
    json.append("\n\"name\": \"\(item.name ?? "Sem nome")\",")
    json.append("\n\"category\": \"\(item.category ?? "Sem categoria")\",")
    json.append("\n\"description\": \"\(item.description)\"")
    json.append("\n},")
}


let jsonFile = try folder.createFile(named: "aditivos.json")
try jsonFile.write(string: "[\(json)\n]")
